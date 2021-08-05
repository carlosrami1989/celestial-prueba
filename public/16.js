(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/SocialMedia.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/SocialMedia.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SectionNews',
  data: function data() {
    return {
      items: [{
        src: __webpack_require__(/*! ../../assets/b001.jpeg */ "./resources/js/assets/b001.jpeg")
      }, {
        src: __webpack_require__(/*! ../../assets/b002.jpeg */ "./resources/js/assets/b002.jpeg")
      }, {
        src: __webpack_require__(/*! ../../assets/b003.jpeg */ "./resources/js/assets/b003.jpeg")
      }, {
        src: __webpack_require__(/*! ../../assets/b004.jpeg */ "./resources/js/assets/b004.jpeg")
      }]
    };
  },
  provide: {
    heading: {
      align: 'center'
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/SocialMedia.vue?vue&type=template&id=0e791716&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/SocialMedia.vue?vue&type=template&id=0e791716& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "v-theme-provider",
    { attrs: { dark: "" } },
    [
      _c(
        "base-section",
        {
          staticClass: "accent text-center",
          attrs: { id: "social", space: "56" }
        },
        [
          _c("base-icon", { staticClass: "mb-8" }, [
            _vm._v("\nmdi-church \n     ")
          ]),
          _vm._v(" "),
          _c("base-section-heading", {
            attrs: { color: "transparent", title: "Radio Celestial Omega" }
          }),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-carousel",
                { attrs: { "show-arrows": false, width: "50%" } },
                _vm._l(_vm.items, function(item, i) {
                  return _c("v-carousel-item", {
                    key: i,
                    attrs: { src: item.src }
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "py-4" }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "font-weight-bold",
              attrs: {
                color: "white",
                href: "",
                light: "",
                "min-width": "168",
                target: "_blank",
                "x-large": ""
              }
            },
            [
              _vm._v("\n       Vér más en Galería\n\n       "),
              _c("v-icon", { attrs: { right: "" } }, [
                _vm._v("\n         mdi-open-in-new\n       ")
              ])
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

/***/ "./resources/js/assets/b001.jpeg":
/*!***************************************!*\
  !*** ./resources/js/assets/b001.jpeg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/b001.jpeg?715ff8bd094af75d4e89e5c0fdf46d9f";

/***/ }),

/***/ "./resources/js/assets/b002.jpeg":
/*!***************************************!*\
  !*** ./resources/js/assets/b002.jpeg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/b002.jpeg?a6cadc609651eb92507e548c9f77ccb3";

/***/ }),

/***/ "./resources/js/assets/b003.jpeg":
/*!***************************************!*\
  !*** ./resources/js/assets/b003.jpeg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/b003.jpeg?61db8bf7fa8e2dfd07bedf832bfd7016";

/***/ }),

/***/ "./resources/js/assets/b004.jpeg":
/*!***************************************!*\
  !*** ./resources/js/assets/b004.jpeg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/b004.jpeg?949691e6325ece87e3a8eccaf36837ef";

/***/ }),

/***/ "./resources/js/views/sections/SocialMedia.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/sections/SocialMedia.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialMedia_vue_vue_type_template_id_0e791716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialMedia.vue?vue&type=template&id=0e791716& */ "./resources/js/views/sections/SocialMedia.vue?vue&type=template&id=0e791716&");
/* harmony import */ var _SocialMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialMedia.vue?vue&type=script&lang=js& */ "./resources/js/views/sections/SocialMedia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialMedia_vue_vue_type_template_id_0e791716___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialMedia_vue_vue_type_template_id_0e791716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/sections/SocialMedia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/sections/SocialMedia.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/sections/SocialMedia.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialMedia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/SocialMedia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/sections/SocialMedia.vue?vue&type=template&id=0e791716&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/sections/SocialMedia.vue?vue&type=template&id=0e791716& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMedia_vue_vue_type_template_id_0e791716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialMedia.vue?vue&type=template&id=0e791716& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/SocialMedia.vue?vue&type=template&id=0e791716&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMedia_vue_vue_type_template_id_0e791716___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMedia_vue_vue_type_template_id_0e791716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);