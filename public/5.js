(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// VuetifyAudio: () => import('vuetify-audio'),
  },
  data: function data() {
    return {
      msgs: [],
      radio: {
        file: '',
        name: '',
        play: false
      },
      file: 'https://mus8.about-in.tk/skm/4e25df2d-1cf9-49e2-a10b-8991ea4ec99d.mp3',
      color: null,
      btnText: 'Set Color to "Success" (Green)',
      rating: 4,
      items: [{
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      }],
      headers: [{
        text: '',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Genero Musical',
        value: 'text'
      }],
      desserts: [{
        text: 'Cristianas',
        des: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%'
      }, {
        text: 'Baladas',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%'
      }, {
        text: 'Pop',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%'
      }, {
        text: 'Alabanzas',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%'
      }],
      musicacabecera: [{
        text: '',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Lista de reproducción',
        value: 'text'
      }],
      musicades: [{
        text: 'Jose Luis Reyes - Esta Cayendo',
        src: 'https://mus.djcristiano.tk/top/Jose Luis Reyes - Esta Cayendo.mp3'
      }, {
        text: 'Barak - Ven Espiritu Santo',
        src: 'https://mus.djcristiano.tk/top/Barak - Ven Espiritu Santo.mp3'
      }, {
        text: 'Ricardo Rodriguez - Alaba',
        src: 'https://mus.djcristiano.tk/top/Ricardo Rodriguez - Alaba.mp3'
      }, {
        text: 'Jesus Adrian Romero - Mi Jesus, Mi Amado',
        src: 'https://mus.djcristiano.tk/top/Jesus Adrian Romero - Mi Jesus, Mi Amado.mp3'
      }, {
        text: 'Jesus Adrian Romero - Abre Los Cielos',
        src: 'https://mus.djcristiano.tk/top/Jesus Adrian Romero - Abre Los Cielos.mp3'
      }, {
        text: 'Palabra en Accion - Santo Es El Senor',
        src: 'https://mus.djcristiano.tk/top/Palabra en Accion - Santo Es El Senor.mp3'
      }, {
        text: 'Abel Brito - Toma Mi Corazon',
        src: 'https://mus.djcristiano.tk/top/Abel Brito - Toma Mi Corazon.mp3'
      }, {
        text: 'Marcela Gandara - Dame Tus Ojos',
        src: 'https://mus.djcristiano.tk/top/Marcela Gandara - Dame Tus Ojos.mp3'
      }]
    };
  },
  provide: {
    theme: {
      isDark: true
    }
  },
  methods: {
    setRadio: function setRadio(value) {
      this.radio.file = value.src;
      this.radio.play = true;
      this.radio.name = value.text;
    },
    getColor: function getColor(calories) {
      if (calories > 400) return 'red';else if (calories > 200) return 'orange';else return 'green';
    },
    audioFinish: function audioFinish() {
      this.msgs.push('The audio finished.');
    },
    setColor: function setColor() {
      if (this.color) {
        this.color = null;
        this.btnText = 'Set Color to "Success" (Green)';
      } else {
        this.color = 'success';
        this.btnText = 'Set Color to Default (Follow the Theme)';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.transparent {\n  \n  opacity: 0.65;\n}\n.video{\n   \n  opacity: 100;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeRadio.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=template&id=2477feec&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=template&id=2477feec& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "base-section",
    { attrs: { id: "home-radio" } },
    [
      _c("base-section-heading", { attrs: { title: "REPRODUCTOR MUSICAL" } }),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            { attrs: { dense: "" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "4" } },
                [
                  _c(
                    "v-card",
                    {
                      attrs: {
                        color: "light-green accent-4",
                        "max-width": "344"
                      }
                    },
                    [
                      _c("v-card-text", { staticClass: "black--text" }, [
                        _vm._v("\r\n\t\t\t\t\tGeneros Musicales\r\n\t\t\t\t")
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.desserts,
                          "items-per-page": 5
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.name",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: {
                                      large: "",
                                      color: "light-green accent-4"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n\t\t\t\t\t\tmdi-folder-music-outline\r\n\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "black--text" }, [
                        _vm._v(
                          " \r\n\t\t\t\tElige el Genero a escuchar ♪♫\r\n\t\t\t\t"
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "4" } },
                [
                  _c(
                    "v-card",
                    { attrs: { color: "yellow accent-2", "max-width": "344" } },
                    [
                      _c("v-card-text", { staticClass: "black--text" }, [
                        _vm._v(
                          "\r\n\t\t\t\t\tLista de Reproducción\r\n\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: _vm.musicacabecera,
                          items: _vm.musicades,
                          "items-per-page": 5
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.name",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: {
                                      large: "",
                                      color: "yellow accent-2"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.setRadio(item)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n\t\t\t\t\t\tmdi-music\r\n\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "black--text" }, [
                        _vm._v(
                          " \r\n\t\t\t\tElige la canción a escuchar ♪♫\r\n\t\t\t\t"
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "4" } },
                [
                  _c(
                    "v-card",
                    { attrs: { color: "orange darken-4", "max-width": "344" } },
                    [
                      _c(
                        "v-card-text",
                        [
                          _c("vue-radio", {
                            attrs: {
                              file: _vm.radio.file,
                              namemusic: _vm.radio.name,
                              "auto-play": _vm.radio.play,
                              downloadable: true
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/sections/reproductor/HomeRadio.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/sections/reproductor/HomeRadio.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeRadio_vue_vue_type_template_id_2477feec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeRadio.vue?vue&type=template&id=2477feec& */ "./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=template&id=2477feec&");
/* harmony import */ var _HomeRadio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeRadio.vue?vue&type=script&lang=js& */ "./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HomeRadio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeRadio.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomeRadio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeRadio_vue_vue_type_template_id_2477feec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeRadio_vue_vue_type_template_id_2477feec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/sections/reproductor/HomeRadio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeRadio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeRadio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeRadio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeRadio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeRadio.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeRadio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeRadio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeRadio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeRadio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=template&id=2477feec&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=template&id=2477feec& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeRadio_vue_vue_type_template_id_2477feec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeRadio.vue?vue&type=template&id=2477feec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/reproductor/HomeRadio.vue?vue&type=template&id=2477feec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeRadio_vue_vue_type_template_id_2477feec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeRadio_vue_vue_type_template_id_2477feec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);