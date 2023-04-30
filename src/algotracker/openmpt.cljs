(ns algotracker.openmpt
  (:require
    [applied-science.js-interop :as j]
    ["wavefile" :refer [WaveFile]]))

(defonce mpt-promise
  (js/Promise.
    (fn [res _err]
      (j/assoc! js/window :libopenmpt
                #js {:locateFile (fn [filename] (str "chiptune2.js/" filename))
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

(defn get-duration [mod-ptr]
  (.toFixed (._openmpt_module_get_duration_seconds js/libopenmpt mod-ptr) 2))

(defn render-song [mod-ptr]
  (.time js/console "render-song")
  (let [sample-rate 44100
        song-duration-seconds (get-duration mod-ptr)
        frame-count (* sample-rate song-duration-seconds)
        mptbuffer-ptrs (map (fn [_i] (._malloc js/libopenmpt (* 4 frame-count))) (range 2))
        actual-frames (._openmpt_module_read_float_stereo js/libopenmpt mod-ptr 44100 frame-count (first mptbuffer-ptrs) (second mptbuffer-ptrs))
        raw-audio-arrays (map (fn [i] ; TODO use Float32Array instead and js .map
                                (let [buffer-ptr (nth mptbuffer-ptrs i)
                                      idx (/ buffer-ptr 4)]
                                  (-> js/libopenmpt .-HEAPF32 (.subarray idx (+ idx actual-frames)))))
                              (range 2))]
    (.timeEnd js/console "render-song")
    raw-audio-arrays))

(defn buffers-to-wave [buffers]
  (let [w (WaveFile.)]
    (js/console.log "wav" w)
    (.fromScratch
      w 2 44100 "32f"
      #js [(first buffers) (second buffers)])
    w))

