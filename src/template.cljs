(ns src.template)

(defn ui [_state]
  ; Put your Reagent format user interface in here.
  [:<>
   [:h3 "Example generator"]
   [:p "This is where the generator's UI goes."]])

(defn make-sample-set [_state]
  ; Return an array of audio file data
  )

(defn make-pattern-settings [_state]
  ; set up state to start generating patterns
  )

(defn make-patterns [_state]
  ; return pattern data referencing the samples created previously
  [; channel 1
   (for [_i (range 64)]
     {:note :E-6 :sample 12 :fx 0x00})
   ; channel 2
   (for [_i (range 64)]
     {:note :F#5 :sample 17 :fx 0x00})])

#js {:ui ui
     :make-sample-set make-sample-set
     :make-pattern-settings make-pattern-settings
     :make-patterns make-patterns}
