(ns algotracker.testmodule)

(defn ui [_state]
  ; Put your Reagent format user interface in here.
  [:<>
   [:h3 "hello"]
   [:p "This is a user interface."]])

(defn make-sample-set [_state]
  ; Return an array of audio file data
  (map
    (fn [_i]
      {:volume 1
       :name ""
       :samples (map (fn [_i] (- (js/Math.random) 0.5)) (range 441))
       ;:samples (map (fn [i] (js/Math.sin (/ i 4410))) (range 441))
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
       {:note :E-6 :semitone 60 :sample 1 :fx 0x00}))
   (for [i (range 64)]
     (when (= (* (mod i 7) (mod i 5)) 0)
       {:note :F#5 :semitone 60 :sample 2 :fx 0x00}))])

(def export
  #js {:ui ui
       :make-sample-set make-sample-set
       :make-pattern-settings make-pattern-settings
       :make-patterns make-patterns})

export
