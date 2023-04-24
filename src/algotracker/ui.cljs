(ns algotracker.ui
  (:require [applied-science.js-interop :as j]
            [promesa.core :as p]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            ["txt-tracker/savers/mod" :as save-mod]
            ["txt-tracker/loaders/json" :as load-json]
            [shadow.resource :as rc]))

(defonce state (r/atom {}))

(defonce mpt-promise
  (js/Promise.
    (fn [res _err]
      (j/assoc! js/window :libopenmpt
                #js {:locateFile (fn [filename] (str "chiptune2.js.git/" filename))
                     :onRuntimeInitialized (fn []
                                             (js/console.log "libopenmpt initialized")
                                             (js/console.log js/libopenmpt)
                                             (js/console.log "libopenmpt Library version:"
                                                             (js/libopenmpt.ccall "openmpt_get_string" "string" #js ["string"] #js ["library_version"]))
                                             (js/console.log "libopenmpt Core version:"
                                                             (js/libopenmpt.ccall "openmpt_get_string" "string" #js ["string"] #js ["core_version"]))
                                             (res js/libopenmpt))}))))

(defn load-mod [mod-data]
  (let [barr (js/Int8Array. mod-data)
        ptr-to-file (._malloc js/libopenmpt (j/get barr :length))]
    (-> js/libopenmpt .-HEAPU8 (.set barr ptr-to-file))
    (js/libopenmpt._openmpt_module_create_from_memory ptr-to-file (j/get barr :length) 0 0 0)))

(defn get-metadata [mod-ptr]
  (let [data #js {}
        mod-keys (.split (js/UTF8ToString (._openmpt_module_get_metadata_keys js/libopenmpt mod-ptr)) #";")]
    (doseq [k mod-keys]
      (let [key-name-buffer (._malloc js/libopenmpt (+ (.-length k) 1))]
        (js/writeAsciiToMemory k key-name-buffer)
        (j/assoc! data k (js/UTF8ToString (._openmpt_module_get_metadata js/libopenmpt mod-ptr key-name-buffer)))
        (._free js/libopenmpt key-name-buffer)))
    data))

(defn component-main [_state]
  (let [mod-json (rc/inline "small.mod.json")
        mod-data (->
                   mod-json
                   load-json
                   save-mod)
        mod-file (js/File. #js [mod-data] #js {:name "small.mod" :content-type "audio/x-mod"})
        module (load-mod mod-data)
        metadata (get-metadata module)]
    [:div
     [:h1 "algotracker"]
     [:p "Algorithmically generating tracker music."]
     [:a {:href (js/URL.createObjectURL mod-file) :download "small.mod"} "small.mod"]
     [:h3 "small.mod"]
     [:pre (js/JSON.stringify metadata nil 2)]]))

(defn start {:dev/after-load true} []
  (p/let [res (.then mpt-promise)]
    (js/console.log "libopenmpt resolved:" res)
    (rdom/render [component-main state]
                 (js/document.getElementById "app"))))

(defn main! []
  (start))
