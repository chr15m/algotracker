(ns algotracker.ui
  (:require [applied-science.js-interop :as j]
            [promesa.core :as p]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            ["txt-tracker/savers/mod" :as save-mod]
            ["txt-tracker/loaders/json" :as load-json]
            ["wavefile" :refer [WaveFile]]
            [shadow.resource :as rc]
            [algotracker.openmpt :refer [mpt-promise load-mod get-metadata get-duration render-song buffers-to-wave]]
            ;[algotracker.runner :refer [compile-code]]
            [algotracker.testmodule :refer [export]]))

(defonce state (r/atom {}))

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

(defn component-main [state]
  [:<>
   [:header {:dangerouslySetInnerHTML
             {:__html (rc/inline "spectrum.svg")}}]
   [:main
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
     #_ [:label {:for "watcher"}
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
      "Download template.cljs"]]]])

(defn start {:dev/after-load true} []
  (p/let [mpt (.then mpt-promise)
          _ (js/console.log "libopenmpt loaded:" mpt)
          ;mod-json (rc/inline "small.mod.json")
          ;render (render-mod mod-json)
          ; TODO: run render on background webworker thread
          render (render-dynamic-module export)
          ui (j/get export :ui)]
    (swap! state assoc :render render :ui ui)
    ;(js/console.log "mod-json" (js/JSON.parse mod-json))
    (rdom/render [component-main state]
                 (js/document.getElementById "app"))))

(defn main! []
  ; TODO: wait for promises to prevent parallel runs
  ;(js/setInterval #(filewatcher state) 23)
  (start))
