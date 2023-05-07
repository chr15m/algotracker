(ns algotracker.ui
  (:require [applied-science.js-interop :as j]
            [promesa.core :as p]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            ["txt-tracker/savers/mod" :as save-mod]
            ["txt-tracker/loaders/json" :as load-json]
            ["crypto-js/sha512" :as sha512]
            ["crypto-js/enc-hex" :as enc-hex]
            [shadow.resource :as rc]
            [algotracker.openmpt :refer [mpt-promise load-mod get-metadata get-duration render-song buffers-to-wave]]
            [algotracker.runner :refer [compile-code]]))

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

(defn get-file-time [file]
  (if file
    (-> file .-lastModified js/Date. .getTime)
    0))

(defn filewatcher [state]
  (let [file (@state :file)
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
              value (do
                      (print "New generator cljs file loaded.")
                      (print _result)
                      (swap! state assoc :last (or updated last-mod) :ui (j/get value :ui))
                      ;(j/call value :make-sample-set state)
                      ;(j/call value :make-pattern-settings state)
                      ;(j/call value :make-patterns state)
                      ))))))

(defn file-selected! [state ev]
  (let [input (.. ev -target)
        file (j/get-in input [:files 0])]
    (js/console.log "Loading:" file)
    (swap! state assoc :file file)
    (filewatcher state)))

(defn component-main [state mod-file metadata duration json-file wav-data-uri]
  [:div
   [:h1 "ÄlgoTracker"]
   (let [ui (:ui @state)]
     (if ui [ui state]
       [:<>
        [:p "Algorithmic tracker music generator."]
        [:p "This is currently a proof-of-concept.
            The input is a json file containing base64 encoded samples and note position data.
            The output is an Amiga Protracker mod file you can download and a wave file that you can listen to and download.
            The whole thing runs client side in the browser."]
        [:p "The next step is to build generators for producing the json structure algorithmically."]
        [:h3 "small.mod (" duration "s)"]
        [:p
         "Generated from " [:a {:href (js/URL.createObjectURL json-file) :download "small.mod.json"} "small.mod.json"] ". "
         "Download " [:a {:href (js/URL.createObjectURL mod-file) :download "small.mod"} "small.mod"] ". "
         "Download " [:a {:href wav-data-uri :download "small.wav"} "small.wav"] "."]
        [:audio {:src wav-data-uri :controls true :loop true}]
        [:pre (js/JSON.stringify metadata nil 2)]]))
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
  (p/let [res (.then mpt-promise)
          _ (js/console.log "libopenmpt loaded:" res)
          mod-json (rc/inline "small.mod.json")
          mod-data (->
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
    ; clean up
    (._openmpt_module_destroy js/libopenmpt module)
    (js/console.log "raw-audio" (clj->js rendered))
    (rdom/render [component-main state mod-file metadata duration json-file wav-data-uri]
                 (js/document.getElementById "app"))))

(defn main! []
  ; TODO: wait for promises to prevent parallel runs
  (js/setInterval #(filewatcher state) 100)
  (start))
