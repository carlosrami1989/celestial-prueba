(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/HomeVideoFace.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/HomeVideoFace.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      src1: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F368227596923313%2Fvideos%2F175610434615005%2F&show_text=true&width=560&t=0',
      src2: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F368227596923313%2Fvideos%2F361531322067801%2F&show_text=true&width=560&t=0',
      src3: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FStvpidpage%2Fvideos%2F1802599603143969%2F&show_text=true&width=560&t=0'
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/HomeVideoFace.vue?vue&type=template&id=30352652&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/HomeVideoFace.vue?vue&type=template&id=30352652& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "home-video-face" } },
    [
      _c("base-section-heading", { attrs: { title: "Facebook video" } }),
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
                      staticClass: "mx-auto",
                      attrs: { color: "indigo lighten-5", "max-width": "344" }
                    },
                    [
                      _c("iframe", {
                        staticStyle: { border: "none", overflow: "hidden" },
                        attrs: {
                          src: _vm.src2,
                          width: "344",
                          height: "250",
                          scrolling: "no",
                          frameborder: "0",
                          allowfullscreen: "true",
                          allow:
                            "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",
                          allowFullScreen: "true"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "black--text" },
                        [
                          _c(
                            "v-icon",
                            { attrs: { color: "blue darken-2", size: "80px" } },
                            [
                              _vm._v(
                                "\r\n                              mdi-facebook\r\n                            "
                              )
                            ]
                          ),
                          _vm._v(
                            "\r\n                             Celestial Omega Radiotv\r\n                        "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-spacer")
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
                    {
                      staticClass: "mx-auto",
                      attrs: { color: "indigo lighten-5", "max-width": "344" }
                    },
                    [
                      _c("iframe", {
                        staticStyle: { border: "none", overflow: "hidden" },
                        attrs: {
                          src: _vm.src3,
                          width: "344",
                          height: "250",
                          scrolling: "no",
                          frameborder: "0",
                          allowfullscreen: "true",
                          allow:
                            "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",
                          allowFullScreen: "true"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "black--text" },
                        [
                          _c(
                            "v-icon",
                            { attrs: { color: "blue darken-2", size: "80px" } },
                            [
                              _vm._v(
                                "\r\n                              mdi-facebook\r\n                            "
                              )
                            ]
                          ),
                          _vm._v(
                            "\r\n                             Celestial Omega Radiotv\r\n                        "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-spacer")
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
                    {
                      staticClass: "mx-auto",
                      attrs: { color: "indigo lighten-5", "max-width": "344" }
                    },
                    [
                      _c("iframe", {
                        staticStyle: { border: "none", overflow: "hidden" },
                        attrs: {
                          src: _vm.src1,
                          width: "344",
                          height: "250",
                          scrolling: "no",
                          frameborder: "0",
                          allowfullscreen: "true",
                          allow:
                            "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",
                          allowFullScreen: "true"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "black--text" },
                        [
                          _c(
                            "v-icon",
                            { attrs: { color: "blue darken-2", size: "80px" } },
                            [
                              _vm._v(
                                "\r\n                              mdi-facebook\r\n                            "
                              )
                            ]
                          ),
                          _vm._v(
                            "\r\n                             Celestial Omega Radiotv\r\n                        "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-spacer")
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

/***/ "./resources/js/views/sections/HomeVideoFace.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/sections/HomeVideoFace.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeVideoFace_vue_vue_type_template_id_30352652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeVideoFace.vue?vue&type=template&id=30352652& */ "./resources/js/views/sections/HomeVideoFace.vue?vue&type=template&id=30352652&");
/* harmony import */ var _HomeVideoFace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeVideoFace.vue?vue&type=script&lang=js& */ "./resources/js/views/sections/HomeVideoFace.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeVideoFace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeVideoFace_vue_vue_type_template_id_30352652___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeVideoFace_vue_vue_type_template_id_30352652___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/sections/HomeVideoFace.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/sections/HomeVideoFace.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/sections/HomeVideoFace.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeVideoFace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeVideoFace.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/HomeVideoFace.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeVideoFace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/sections/HomeVideoFace.vue?vue&type=template&id=30352652&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/sections/HomeVideoFace.vue?vue&type=template&id=30352652& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeVideoFace_vue_vue_type_template_id_30352652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeVideoFace.vue?vue&type=template&id=30352652& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/HomeVideoFace.vue?vue&type=template&id=30352652&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeVideoFace_vue_vue_type_template_id_30352652___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeVideoFace_vue_vue_type_template_id_30352652___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);