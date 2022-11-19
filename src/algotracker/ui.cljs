(ns algotracker.ui
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            ["txt-tracker/savers/mod" :as save-mod]
            [shadow.resource :as rc]))

(defonce state (r/atom {}))

(defn fix-pcm [mod-data]
  (.map (aget mod-data "samples")
        (fn [sample]
          (js/console.log (aget sample "name"))
          (let [pcm (aget sample "pcm")]
            (when pcm
              (aset pcm "length" (aget sample "length"))))))
  mod-data)

(defn component-main [_state]
  (let [mod-data (-> (rc/inline "2s-library.mod.json")
                   js/JSON.parse
                   fix-pcm
                   save-mod)
        mod-file (js/File. #js [mod-data] #js {:name "test.mod" :content-type "audio/x-mod"})]
    [:div
     [:h1 "algotracker"]
     [:p "Algorithmically generating tracker music."]
     [:a {:href (js/URL.createObjectURL mod-file) :download "test.mod"} [:button "download generated mod"]]
     ;[:pre (pr-str @state)]
     #_ [:p [:a {:href "/mypage"} "Static server rendered page."]]
     #_ [:p [:a {:href "/api/example.json"} "JSON API example."]]]))

(defn start {:dev/after-load true} []
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn main! []
  (start))
