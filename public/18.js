(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/SliderHome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/SliderHome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SectionHero",
  data: function data() {
    return {
      items: [{
        src: __webpack_require__(/*! ../../assets/bannerok5-02.jpg */ "./resources/js/assets/bannerok5-02.jpg"),
        slides: "LA MEJOR RADIO" //src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',

      }, {
        src: __webpack_require__(/*! ../../assets/bannerok4-02.jpg */ "./resources/js/assets/bannerok4-02.jpg"),
        slides: "LA MEJOR RADIO"
      }, {
        src: __webpack_require__(/*! ../../assets/bannerok6-02.jpg */ "./resources/js/assets/bannerok6-02.jpg"),
        slides: "LA MEJOR RADIO"
      }],
      colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    };
  },
  provide: {
    theme: {
      isDark: true
    }
  },
  computed: {
    minHeight: function minHeight() {
      var height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";
      return "calc(".concat(height, " - ").concat(this.$vuetify.application.top, "px)");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/SliderHome.vue?vue&type=template&id=b8f5f35c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/SliderHome.vue?vue&type=template&id=b8f5f35c& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "section",
    { attrs: { id: "slider-home" } },
    [
      _c(
        "v-banner",
        { attrs: { dark: "", elevation: "23", width: "100%" } },
        [
          _c(
            "v-carousel",
            {
              attrs: {
                cycle: "",
                height: "550",
                "hide-delimiter-background": "",
                "show-arrows-on-hover": ""
              }
            },
            _vm._l(_vm.items, function(item, i) {
              return _c("v-carousel-item", { key: i, attrs: { src: item.src } })
            }),
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

/***/ "./resources/js/assets/bannerok4-02.jpg":
/*!**********************************************!*\
  !*** ./resources/js/assets/bannerok4-02.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bannerok4-02.jpg?295f119c3348fb0d0dd4a0f449acbdd2";

/***/ }),

/***/ "./resources/js/assets/bannerok5-02.jpg":
/*!**********************************************!*\
  !*** ./resources/js/assets/bannerok5-02.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bannerok5-02.jpg?325ccc856a26e4337abc8dd2601cad45";

/***/ }),

/***/ "./resources/js/assets/bannerok6-02.jpg":
/*!**********************************************!*\
  !*** ./resources/js/assets/bannerok6-02.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bannerok6-02.jpg?062a57fed1a0700bd59c4c1419d38f64";

/***/ }),

/***/ "./resources/js/views/sections/SliderHome.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/sections/SliderHome.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SliderHome_vue_vue_type_template_id_b8f5f35c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderHome.vue?vue&type=template&id=b8f5f35c& */ "./resources/js/views/sections/SliderHome.vue?vue&type=template&id=b8f5f35c&");
/* harmony import */ var _SliderHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderHome.vue?vue&type=script&lang=js& */ "./resources/js/views/sections/SliderHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SliderHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SliderHome_vue_vue_type_template_id_b8f5f35c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SliderHome_vue_vue_type_template_id_b8f5f35c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/sections/SliderHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/sections/SliderHome.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/sections/SliderHome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SliderHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/SliderHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/sections/SliderHome.vue?vue&type=template&id=b8f5f35c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/sections/SliderHome.vue?vue&type=template&id=b8f5f35c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderHome_vue_vue_type_template_id_b8f5f35c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SliderHome.vue?vue&type=template&id=b8f5f35c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/SliderHome.vue?vue&type=template&id=b8f5f35c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderHome_vue_vue_type_template_id_b8f5f35c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderHome_vue_vue_type_template_id_b8f5f35c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);