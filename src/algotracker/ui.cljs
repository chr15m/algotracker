(ns algotracker.ui
  (:require ;[applied-science.js-interop :as j]
            [promesa.core :as p]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            ["txt-tracker/savers/mod" :as save-mod]
            ["txt-tracker/loaders/json" :as load-json]
            [shadow.resource :as rc]
            [algotracker.openmpt :refer [mpt-promise load-mod get-metadata get-duration render-song buffers-to-wave]]))

(defonce state (r/atom {}))

(defn component-main [_state mod-file metadata duration json-file wav-data-uri]
  [:div
   [:h1 "ÄlgoTracker"]
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
   [:p ]
   [:audio {:src wav-data-uri :controls true :loop true}]
   [:pre (js/JSON.stringify metadata nil 2)]])

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
  (start))
