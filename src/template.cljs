(ns src.template)

(defn ui [_state]
  ; Put your Reagent format user interface in here.
  [:<>
   [:div "hello"]
   [:p "This is a thing."]])

(defn make-sample-set [_state]
  ; Return an array of audio file data
  )

(defn make-pattern-settings [_state]
  ; set up state to start generating patterns
  )

(defn make-patterns [_state]
  ; return pattern data referencing the samples created previously
  )

#js {:ui ui
     :make-sample-set make-sample-set
     :make-pattern-settings make-pattern-settings
     :make-patterns make-patterns}
