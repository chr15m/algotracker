(ns algotracker.testmodule
  (:require
    [promesa.core :as p]))

(defn ui [_state]
  ; Put your Reagent format user interface in here.
  [:<>
   [:h3 "hello"]
   [:p "This is a user interface."]])

(defn make-sample-set [_state]
  (p/all
    (for [_ (range 2)]
      (p/let [context (js/AudioContext.)
              soundfile (str "sound-pack-ae/sysex-export/aut_" (-> (js/Math.random) (* 101) js/Math.floor) ".wav")
              res (js/fetch soundfile)
              file (.arrayBuffer res)
              audio-buffer (.decodeAudioData context file)
              data (.getChannelData audio-buffer 0)]
        (js/console.log "Loading" soundfile)
        (js/console.log data)
        {:volume 1
         :name ""
         ;:samples (map (fn [_i] (- (js/Math.random) 0.5)) (range 441))
         :samples data
         ;:loopStart 0
         ;:loopLength 441
         :wave ""
         :finetune 7})))
  ; Return an array of audio file data
  #_ (map
    (fn [s]
      {:volume 1
       :name ""
       ;:samples (map (fn [_i] (- (js/Math.random) 0.5)) (range 441))
       :samples (map
                  (fn [i] (js/Math.sin
                            (* (/ i 441) js/Math.PI 10 (inc s))))
                  (range 441))
       ;:loopStart 0
       ;:loopLength 441
       :wave ""
       :finetune 7})
    (range 2)))

(defn make-pattern-settings [_state]
  ; set up state to start generating patterns
  )

(defn make-patterns [_state _pattern-settings]
  ; return pattern data referencing the samples created previously
  ; samples indexed from 1 not 0
  [(for [i (range 64)]
     (when (= (* (mod i 4) (mod (inc i) 1)) 0)
       {:semitone (- (rand-nth [60 72 65]) 12) :sample 1 :fx 0xEC4}))
   (for [i (range 64)]
     (when (= (* (mod i 7) (mod i 5)) 0)
       {:semitone (- (rand-nth [48 60 65 67]) 12) :sample 2 :fx 0xEC4}))])

(def export
  #js {:ui ui
       :make-sample-set make-sample-set
       :make-pattern-settings make-pattern-settings
       :make-patterns make-patterns})

export
