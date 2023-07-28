(ns algotracker.testmodule)

(defn ui [_state]
  ; Put your Reagent format user interface in here.
  [:<>
   [:h3 "hello"]
   [:p "This is a user interface."]])

(defn make-sample-set [_state]
  ; Return an array of audio file data
  (map
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
       {:note (rand-nth [:E-6 :G-6 :F-5]) :semitone (rand-nth [60 72 65]) :sample 1 :fx 0xEC4}))
   (for [i (range 64)]
     (when (= (* (mod i 7) (mod i 5)) 0)
       {:note (rand-nth [:F#5 :G-6]) :semitone (rand-nth [48 60 65 67]) :sample 2 :fx 0xEC4}))])

(def export
  #js {:ui ui
       :make-sample-set make-sample-set
       :make-pattern-settings make-pattern-settings
       :make-patterns make-patterns})

export
