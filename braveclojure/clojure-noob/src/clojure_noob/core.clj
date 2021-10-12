(ns clojure-noob.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "I'm a little teapot!"))

(defn train []
  (println "Choo choo!"))

(println "Cleanliness is next to godliness")

(defn apply-op-to-val
  [op val]
  (partial op val))

(def add1 (apply-op-to-val + 1))

(defn error-message [severity]
  (str "OH GOD! IT'S A DISASTER! WE'RE "
       (if (= severity :mild)
         "MILDLY INCONVENIENCED!"
         "DOOOOOOOOMED!")))

(error-message :mild)

;; Take an input for base values; associate with a default map, then increment
;; all values
(let [base-vals {:b 2}
      default-keys #{:a :b :c}
      default-map (zipmap default-keys (repeat 3 0))
      main-map (merge default-map base-vals)]
  (zipmap (keys main-map) (map inc (vals main-map))))

;; Weird demonstrations for `and` and `or`
((or + -) 1 2 3)  ;; => 6
((and (= 1 1) +) 1 2 3)  ; => 6
((first [+ 0]) 1 2 3)  ; => 6

;; Playing with math and orders of operation
(inc 1.1)
(dec 1.1)
(+ (inc 199) (/ 100 (- 7 2)))  ; => 6

;; Special forms can't be used as function calls?
;; I must have misunderstood what the text was saying...
(inc (if true 3 5))
