(ns algotracker.ui
  (:require [applied-science.js-interop :as j]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            ["txt-tracker/savers/mod" :as save-mod]
            ["txt-tracker/loaders/json" :as load-json]
            [shadow.resource :as rc]))

(defonce state (r/atom {}))

(j/assoc! js/window :libopenmpt
          #js {:locateFile (fn [filename] (str "chiptune2.js.git/" filename))
               :onRuntimeInitialized (fn []
                                       (js/console.log "libopenmpt initialized")
                                       (js/console.log "libopenmpt Library version:"
                                                       (js/libopenmpt.ccall "openmpt_get_string" "string" #js ["string"] #js ["library_version"]))
                                       (js/console.log "libopenmpt Core version:"
                                                       (js/libopenmpt.ccall "openmpt_get_string" "string" #js ["string"] #js ["core_version"])))})

(defn component-main [_state]
  (let [mod-data (-> (rc/inline "small.mod.json")
                   load-json
                   save-mod)
        mod-file (js/File. #js [mod-data] #js {:name "test.mod" :content-type "audio/x-mod"})]
    [:div
     [:h1 "algotracker"]
     [:p "Algorithmically generating tracker music."]
     [:a {:href (js/URL.createObjectURL mod-file) :download "test.mod"} [:button "download generated mod"]]]))

(defn start {:dev/after-load true} []
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn main! []
  (start))
