(ns algotracker.ui
  (:require [applied-science.js-interop :as j]
            [promesa.core :as p]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            ["txt-tracker/savers/mod" :as save-mod]
            ["txt-tracker/loaders/json" :as load-json]
            ["crypto-js/sha512" :as sha512]
            ["crypto-js/enc-hex" :as enc-hex]
            ["wavefile" :refer [WaveFile]]
            [shadow.resource :as rc]
            [algotracker.openmpt :refer [mpt-promise load-mod get-metadata get-duration render-song buffers-to-wave]]
            [algotracker.runner :refer [compile-code]]
            [algotracker.testmodule :refer [export]]))

(defonce state (r/atom {}))

(defn sha512-string [s]
  (.stringify enc-hex (sha512 s)))

(defn read-file [file]
  (js/Promise.
    (fn [res err]
      (let [reader (js/FileReader.)]
        (j/assoc! reader :onload #(res (.. % -target -result)))
        (j/assoc! reader :onerror #(err "FileReader error" %))
        (.readAsText reader file "utf-8")))))

(defn render-mod [mod-json]
  (p/let [mod-data (->
                     mod-json
                     load-json
                     save-mod)
          mod-file (js/File. #js [mod-data] #js {:name "small.mod" :content-type "audio/x-mod"})
          json-file (js/File. #js [mod-json] #js {:name "small.mod.json" :content-type "application/json"})
          module (load-mod mod-data)
          metadata (get-metadata module)
          duration (get-duration module)
          rendered (render-song module)
          wav (buffers-to-wave rendered)
          wav-data-uri (.toDataURI wav)]
    (._openmpt_module_destroy js/libopenmpt module)
    (js/console.log "raw-audio" (clj->js rendered))
    [mod-file metadata duration json-file wav-data-uri]))

(defn get-file-time [file]
  (if file
    (-> file .-lastModified js/Date. .getTime)
    0))

(defn process-patterns [patterns]
  (clj->js
    [(map
       (fn [i]
         (for [pattern patterns]
           (let [cell (nth pattern i)]
             (merge
               {:note ""
                :semitone -1
                :sample nil
                :fx nil}
               cell))))
       (range 64))]))

(defn process-samples [samples]
  (p/let [samples
          (p/all
            (map
              (fn [sample]
                (p/let [sample-data (:samples sample)
                        sample-data (js/Float32Array.from (clj->js sample-data))
                        wave (WaveFile.)]
                  (js/console.log "in wave")
                  (.fromScratch
                    wave 1 44100 "32f"
                    #js [sample-data])
                  (.toBitDepth wave "8")
                  (.toRIFF wave)
                  (assoc sample :wave (.toBase64 wave))))
              samples))]
    (clj->js samples)))

(defn render-dynamic-module [value]
  (js/console.log "loading started")
  (p/let [mod-json-original (rc/inline "small.mod.json")
          mod-json (js/JSON.parse mod-json-original)
          samples (j/call value :make-sample-set state)
          ;_ (js/console.log "before" (clj->js samples))
          samples (process-samples samples)
          ;samples (clj->js samples)
          ;_ (js/console.log "samples" samples)
          pattern-settings (j/call value :make-pattern-settings state)
          patterns (j/call value :make-patterns state pattern-settings)
          mod-json (j/assoc! mod-json :tables (process-patterns patterns))
          mod-json (j/assoc! mod-json :channelCount (count patterns))
          mod-json (j/assoc! mod-json :samples samples)
          mod-json (j/assoc! mod-json)
          render (render-mod (js/JSON.stringify mod-json))]
    (print "New generator cljs file loaded.")
    (js/console.log (js/JSON.parse mod-json-original))
    (js/console.log mod-json)
    ;(print _result)
    render))

(defn filewatcher [state]
  (when (not (:filewatcher @state))
    (swap! state assoc :filewatcher true)
    (let [exit-fn #(swap! state dissoc :filewatcher)]
      (p/catch
        (p/let [file (@state :file)
                last-mod (@state :last)]
          (when file
            (p/let [[content updated]
                    (if (j/get file :text)
                      ; firefox (lastModified does not update)
                      ; and FileReader produces errors on changed file
                      ; so use sha512 hash of file instead
                      (p/let [content (.text file)
                              updated (sha512-string content)]
                        (when (not= updated last-mod)
                          (js/console.log "read file (firefox method):" content)
                          [content updated]))
                      ; chrome - can re-read the modified file without errors
                      (p/let [updated (get-file-time file)]
                        (when (not= updated last-mod)
                          (p/let [content (read-file file)]
                            (js/console.log "read file (chrome method):" content)
                            [content updated]))))
                    {:keys [value error] :as _result} (when content (compile-code content))]
              (cond error (throw error)
                    value (p/do!
                            (swap! state assoc :loading true :last (or updated last-mod))
                            (p/delay 100)
                            (p/let [rendered (render-dynamic-module value)]
                              (swap! state assoc
                                     :ui (j/get value :ui)
                                     :render rendered
                                     :loading false))))))
          (exit-fn))
        exit-fn))))

(defn file-selected! [state ev]
  (let [input (.. ev -target)
        file (j/get-in input [:files 0])]
    (js/console.log "Loading:" file)
    (swap! state assoc :file file)
    (filewatcher state)))

(defn component-main [state]
  [:div
   [:h1 "ÄlgoTracker"]
   (let [ui (:ui @state)]
     (if ui
       [:div.user-ui-wrapper
        [:<>
         [ui state]
         (when (:loading @state) [:div.ui-loader [:div]])]]
       [:<>
        [:p "Algorithmic tracker music generator."]
        [:p "This is currently a proof-of-concept.
            The input is a json file containing base64 encoded samples and note position data.
            The output is an Amiga Protracker mod file you can download and a wave file that you can listen to and download.
            The whole thing runs client side in the browser."]
        [:p "The next step is to build generators for producing the json structure algorithmically."]]))
   (let [[mod-file metadata duration json-file wav-data-uri] (:render @state)]
     [:<>
      [:h3 "small.mod (" duration "s)"]
      [:p
       "Generated from " [:a {:href (js/URL.createObjectURL json-file) :download "small.mod.json"} "small.mod.json"] ". "
       "Download " [:a {:href (js/URL.createObjectURL mod-file) :download "small.mod"} "small.mod"] ". "
       "Download " [:a {:href wav-data-uri :download "small.wav"} "small.wav"] "."]
      [:audio {:src wav-data-uri :controls true :loop true}]
      [:pre (js/JSON.stringify metadata nil 2)]])
   [:div
    [:label {:for "watcher"}
     [:p "Open .cljs file"]
     [:input {:type :file
              :name "watcher"
              :accept ".cljs"
              :on-change #(file-selected! state %)}]]
    [:a {:download "template.cljs"
         :href (js/URL.createObjectURL
                 (js/File.
                   #js [(rc/inline "template.cljs")]
                   #js {:content-type "text/plain"}))}
     "Download template.cljs"]]])

(defn start {:dev/after-load true} []
  (p/let [mpt (.then mpt-promise)
          _ (js/console.log "libopenmpt loaded:" mpt)
          ;mod-json (rc/inline "small.mod.json")
          ;render (render-mod mod-json)
          render (render-dynamic-module export)]
    (swap! state assoc :render render)
    ;(js/console.log "mod-json" (js/JSON.parse mod-json))
    (rdom/render [component-main state]
                 (js/document.getElementById "app"))))

(defn main! []
  ; TODO: wait for promises to prevent parallel runs
  (js/setInterval #(filewatcher state) 23)
  (start))
