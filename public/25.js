(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/Hero.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/Hero.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SectionHero",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/Hero.vue?vue&type=template&id=73668928&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/Hero.vue?vue&type=template&id=73668928& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "hero" } },
    [
      _c(
        "v-img",
        {
          staticClass: "white--text",
          attrs: {
            "min-height": _vm.minHeight,
            src: __webpack_require__(/*! ../../assets/bannerok-02.jpg */ "./resources/js/assets/bannerok-02.jpg"),
            gradient: "to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
          }
        },
        [
          _c(
            "v-container",
            { staticClass: "fill-height px-4 py-12" },
            [
              _c(
                "v-responsive",
                {
                  staticClass: "d-flex align-center mx-auto",
                  attrs: { height: "100%", "max-width": "700", width: "100%" }
                },
                [
                  _c("base-subheading", {
                    attrs: {
                      weight: "regular",
                      title: "WE LOVE MAKING THINGS SIMPLE AND AMAZING"
                    }
                  }),
                  _vm._v(" "),
                  _c("base-heading", {
                    attrs: {
                      size: "text-h2",
                      title: "WELCOME TO ZERO",
                      weight: "medium"
                    }
                  }),
                  _vm._v(" "),
                  _c("base-body", [
                    _vm._v(
                      "\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                    Repudiandae nobis neque aspernatur in quas iure id\n                    aliquid, esse debitis, quibusdam mollitia! Quia ea\n                    expedita magnam totam, earum omnis et perspiciatis?\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-wrap",
                      class: _vm.$vuetify.breakpoint.smAndDown
                        ? "flex-column align-start"
                        : "align-center"
                    },
                    [
                      _c("base-btn", [
                        _vm._v(
                          "\n                        Discover More\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "font-weight-bold ml-6 mr-4 my-4" },
                        [_vm._v("or")]
                      ),
                      _vm._v(" "),
                      _c(
                        "base-btn",
                        {
                          staticClass: "pa-1",
                          attrs: { ripple: false, height: "auto", text: "" }
                        },
                        [
                          _vm._v(
                            "\n                        Get Started Now\n                    "
                          )
                        ]
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

/***/ "./resources/js/views/sections/Hero.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/sections/Hero.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero_vue_vue_type_template_id_73668928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero.vue?vue&type=template&id=73668928& */ "./resources/js/views/sections/Hero.vue?vue&type=template&id=73668928&");
/* harmony import */ var _Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero.vue?vue&type=script&lang=js& */ "./resources/js/views/sections/Hero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hero_vue_vue_type_template_id_73668928___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hero_vue_vue_type_template_id_73668928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/sections/Hero.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/sections/Hero.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/sections/Hero.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/Hero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/sections/Hero.vue?vue&type=template&id=73668928&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/sections/Hero.vue?vue&type=template&id=73668928& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_73668928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=template&id=73668928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/Hero.vue?vue&type=template&id=73668928&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_73668928___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_73668928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);