(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'vuetify-audio',
    props: {
        flat: {
            type: Boolean,
            default: false
        },
        file: {
            type: String,
            default: null
        },
        autoPlay: {
            type: Boolean,
            default: false
        },
        ended: {
            type: Function,
            default: () => {},
        },
        canPlay: {
            type: Function,
            default: () => {},
        },
        color: {
            type: String,
            default: null
        },
        downloadable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        duration: function () {
            return this.audio ? formatTime(this.totalDuration) : ''
        },
    },
    data () {
        return {
            firstPlay: true,
            isMuted: false,
            loaded: false,
            playing: false,
            paused: false,
            percentage: 0,
            currentTime: '00:00:00',
            audio: undefined,
            totalDuration: 0,
        }
    },

    methods: {
        setPosition () {
            this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage);
        },
        stop () {
            this.audio.pause()
            this.paused = true
            this.playing = false
            this.audio.currentTime = 0
        },
        play () {
            if (this.playing) return
            this.audio.play().then(_ => this.playing = true)
            this.paused = false
        },
        pause () {
            this.paused = !this.paused;
            (this.paused) ? this.audio.pause() : this.audio.play()
        },
        download () {
            this.audio.pause()
            window.open(this.file, 'download')
        },
        mute () {
            this.isMuted = !this.isMuted
            this.audio.muted = this.isMuted
            this.volumeValue = this.isMuted ? 0 : 75
        },
        reload () {
            this.audio.load();
        },
        _handleLoaded: function () {
            if (this.audio.readyState >= 2) {
                if (this.audio.duration === Infinity) {
                    // Fix duration for streamed audio source or blob based
                    // https://stackoverflow.com/questions/38443084/how-can-i-add-predefined-length-to-audio-recorded-from-mediarecorder-in-chrome/39971175#39971175
                    this.audio.currentTime = 1e101;
                    this.audio.ontimeupdate = () => {
                        this.audio.ontimeupdate = () => {}
                        this.audio.currentTime = 0
                        this.totalDuration = parseInt(this.audio.duration)
                        this.loaded = true;
                    }
                } else {
                    this.totalDuration = parseInt(this.audio.duration)
                    this.loaded = true
                }

                if (this.autoPlay) this.audio.play()

            } else {
                throw new Error('Failed to load sound file')
            }
        },
        _handlePlayingUI: function (e) {
            this.percentage = this.audio.currentTime / this.audio.duration * 100
            this.currentTime = formatTime(this.audio.currentTime)
            this.playing = true
        },
        _handlePlayPause: function (e) {
            if (e.type === 'play' && this.firstPlay) {
                // in some situations, audio.currentTime is the end one on chrome
                this.audio.currentTime = 0;
                if (this.firstPlay) {
                    this.firstPlay = false;
                }
            }
            if (e.type === 'pause' && this.paused === false && this.playing === false) {
                this.currentTime = '00:00:00'
            }
        },
        _handleEnded () {
            this.paused = this.playing = false;
        },
        init: function () {
            this.audio.addEventListener('timeupdate', this._handlePlayingUI);
            this.audio.addEventListener('loadeddata', this._handleLoaded);
            this.audio.addEventListener('pause', this._handlePlayPause);
            this.audio.addEventListener('play', this._handlePlayPause);
            this.audio.addEventListener('ended', this._handleEnded);
        },
    },
    mounted () {
        this.audio = this.$refs.player;
        this.init();
    },
    beforeDestroy () {
        this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
        this.audio.removeEventListener('loadeddata', this._handleLoaded)
        this.audio.removeEventListener('pause', this._handlePlayPause)
        this.audio.removeEventListener('play', this._handlePlayPause)
        this.audio.removeEventListener('ended', this._handleEnded);
    }

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    {
      staticStyle: { "text-align": "center" },
      attrs: { flat: _vm.flat == undefined || _vm.flat == false ? false : true }
    },
    [
      _c(
        "v-card-text",
        [
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: {
                outlined: "",
                icon: "",
                color: _vm.color,
                disabled: !_vm.loaded
              },
              nativeOn: {
                click: function($event) {
                  _vm.playing ? _vm.pause() : _vm.play()
                }
              }
            },
            [
              !_vm.playing || _vm.paused
                ? _c("v-icon", [_vm._v("mdi-play")])
                : _c("v-icon", [_vm._v("mdi-pause")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: {
                outlined: "",
                icon: "",
                color: _vm.color,
                disabled: !_vm.loaded
              },
              nativeOn: {
                click: function($event) {
                  return _vm.stop()
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-stop")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: {
                outlined: "",
                icon: "",
                color: _vm.color,
                disabled: !_vm.loaded
              },
              nativeOn: {
                click: function($event) {
                  return _vm.mute()
                }
              }
            },
            [
              !_vm.isMuted
                ? _c("v-icon", [_vm._v("mdi-volume-high")])
                : _c("v-icon", [_vm._v("mdi-volume-mute")])
            ],
            1
          ),
          _vm._v(" "),
          !_vm.loaded
            ? _c(
                "v-btn",
                {
                  staticClass: "ma-2",
                  attrs: { outlined: "", icon: "", color: _vm.color },
                  nativeOn: {
                    click: function($event) {
                      _vm.loaded ? _vm.download() : _vm.reload()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-refresh")])],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.loaded && _vm.downloadable
            ? _c(
                "v-btn",
                {
                  staticClass: "ma-2",
                  attrs: { outlined: "", icon: "", color: _vm.color },
                  nativeOn: {
                    click: function($event) {
                      _vm.loaded ? _vm.download() : _vm.reload()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-download")])],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("v-progress-linear", {
            staticStyle: { "margin-top": "15px", "margin-bottom": "15px" },
            attrs: { height: "5", disabled: !_vm.loaded },
            nativeOn: {
              click: function($event) {
                return _vm.setPosition()
              }
            },
            model: {
              value: _vm.percentage,
              callback: function($$v) {
                _vm.percentage = $$v
              },
              expression: "percentage"
            }
          }),
          _vm._v(" "),
          _c("p", [
            _vm._v(_vm._s(_vm.currentTime) + " / " + _vm._s(_vm.duration))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("audio", {
        ref: "player",
        attrs: { id: "player", src: _vm.file },
        on: { ended: _vm.ended, canplay: _vm.canPlay }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-audio/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vuetify-audio/index.js ***!
  \*********************************************/
/*! exports provided: default, VuetifyAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_vuetifyaudio_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/vuetifyaudio.vue */ "./node_modules/vuetify-audio/src/vuetifyaudio.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VuetifyAudio", function() { return _src_vuetifyaudio_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_src_vuetifyaudio_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/vuetify-audio/src/vuetifyaudio.vue":
/*!*********************************************************!*\
  !*** ./node_modules/vuetify-audio/src/vuetifyaudio.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vuetifyaudio.vue?vue&type=template&id=762053d2& */ "./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2&");
/* harmony import */ var _vuetifyaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vuetifyaudio.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vuetifyaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vuetify-audio/src/vuetifyaudio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_vuetifyaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib??vue-loader-options!./vuetifyaudio.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_vuetifyaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2&":
/*!****************************************************************************************!*\
  !*** ./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib??vue-loader-options!./vuetifyaudio.vue?vue&type=template&id=762053d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);