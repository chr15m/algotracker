(ns algotracker.runner 
 (:require
  ;[cljs.tools.reader :refer [read-string]]
  [promesa.core :as p]
  [shadow.cljs.bootstrap.browser :as boot]
  [cljs.env :as env]
  [cljs.js :as cljs]))

(defonce compile-state-ref (atom nil))

(defn compile-it [code]
  (js/Promise.
    (fn [res _err]
      (js/console.log "Running updated code.")
      ;(js/console.log code)
      (cljs/eval-str
        @compile-state-ref
        code
        "[test]"
        {:eval cljs/js-eval
         :load (partial boot/load @compile-state-ref)}
        res))))

(defn bootstrap-compiler []
  (js/Promise.
    (fn [res _err]
      (swap! compile-state-ref
             (fn [c]
               (if (nil? c) 
                 (let [new-compiler (env/default-compiler-env)]
                   (js/console.log "Bootstrapping compiler.")
                   (boot/init new-compiler
                              {:path "bootstrap"}
                              res)
                   new-compiler)
                 (do (res) c)))))))

(defn compile-code [code]
  (p/do!
    (bootstrap-compiler)
    (compile-it code)))

#_ (defn eval-cljs-string [code]
  (js/Promise.
    (fn [res err]
      (let [compiler-state (empty-state)
            parsed-code (read-string (str "(do \n" code ")"))]
        (print "Code to be run:")
        (print parsed-code)
        (try
          (eval compiler-state
                parsed-code
                {:eval js-eval
                 :source-map true
                 :context :expr}
                res)
          (catch :default e (err e)))))))

