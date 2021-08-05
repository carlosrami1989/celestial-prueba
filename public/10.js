(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/Affiliates.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/Affiliates.vue?vue&type=script&lang=js& ***!
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
//
//
//
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
  name: 'SectionAffiliates'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/Affiliates.vue?vue&type=template&id=d71b0290&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/Affiliates.vue?vue&type=template&id=d71b0290& ***!
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
    "base-section",
    { attrs: { id: "affiliates", space: "36" } },
    [
      _c(
        "v-container",
        [
          _c("base-section-heading", {
            attrs: { title: "Nuestro equipo de trabajo" }
          }),
          _vm._v(" "),
          _c(
            "v-slide-group",
            [
              _vm._l(6, function(n) {
                return [
                  _c(
                    "v-slide-item",
                    { key: n, staticClass: "align-self-center" },
                    [
                      _c("base-img", {
                        attrs: {
                          src: __webpack_require__("./resources/js/assets sync recursive ^\\.\\/logo\\-.*\\.jpg$")("./logo-" + n + ".jpg"),
                          color: "grey",
                          contain: "",
                          height: "150",
                          width: "100"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  n < 6
                    ? _c(
                        "v-responsive",
                        {
                          key: "divider-" + n,
                          staticClass: "text-center",
                          attrs: { height: "56", width: "48" }
                        },
                        [_c("v-divider", { attrs: { vertical: "" } })],
                        1
                      )
                    : _vm._e()
                ]
              })
            ],
            2
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

/***/ "./resources/js/assets sync recursive ^\\.\\/logo\\-.*\\.jpg$":
/*!******************************************************!*\
  !*** ./resources/js/assets sync ^\.\/logo\-.*\.jpg$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./logo-1.jpg": "./resources/js/assets/logo-1.jpg",
	"./logo-2.jpg": "./resources/js/assets/logo-2.jpg",
	"./logo-3.jpg": "./resources/js/assets/logo-3.jpg",
	"./logo-4.jpg": "./resources/js/assets/logo-4.jpg",
	"./logo-5.jpg": "./resources/js/assets/logo-5.jpg",
	"./logo-6.jpg": "./resources/js/assets/logo-6.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/assets sync recursive ^\\.\\/logo\\-.*\\.jpg$";

/***/ }),

/***/ "./resources/js/assets/logo-1.jpg":
/*!****************************************!*\
  !*** ./resources/js/assets/logo-1.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-1.jpg?b48f0a4fe948fe27b685b348a7206fec";

/***/ }),

/***/ "./resources/js/assets/logo-2.jpg":
/*!****************************************!*\
  !*** ./resources/js/assets/logo-2.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-2.jpg?52428aedec1d6fec859e068cc0879105";

/***/ }),

/***/ "./resources/js/assets/logo-3.jpg":
/*!****************************************!*\
  !*** ./resources/js/assets/logo-3.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-3.jpg?2ef45e2df23ab77ffca41462aa98d349";

/***/ }),

/***/ "./resources/js/assets/logo-4.jpg":
/*!****************************************!*\
  !*** ./resources/js/assets/logo-4.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-4.jpg?a7d6f2b959903113951b735b4007c694";

/***/ }),

/***/ "./resources/js/assets/logo-5.jpg":
/*!****************************************!*\
  !*** ./resources/js/assets/logo-5.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-5.jpg?735020a8fee376e5855c3a053e5cf9b4";

/***/ }),

/***/ "./resources/js/assets/logo-6.jpg":
/*!****************************************!*\
  !*** ./resources/js/assets/logo-6.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-6.jpg?274b63700985c42ff5ed0957cb012493";

/***/ }),

/***/ "./resources/js/views/sections/Affiliates.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/sections/Affiliates.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Affiliates_vue_vue_type_template_id_d71b0290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Affiliates.vue?vue&type=template&id=d71b0290& */ "./resources/js/views/sections/Affiliates.vue?vue&type=template&id=d71b0290&");
/* harmony import */ var _Affiliates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Affiliates.vue?vue&type=script&lang=js& */ "./resources/js/views/sections/Affiliates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Affiliates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Affiliates_vue_vue_type_template_id_d71b0290___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Affiliates_vue_vue_type_template_id_d71b0290___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/sections/Affiliates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/sections/Affiliates.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/sections/Affiliates.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Affiliates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Affiliates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/Affiliates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Affiliates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/sections/Affiliates.vue?vue&type=template&id=d71b0290&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/sections/Affiliates.vue?vue&type=template&id=d71b0290& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Affiliates_vue_vue_type_template_id_d71b0290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Affiliates.vue?vue&type=template&id=d71b0290& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/Affiliates.vue?vue&type=template&id=d71b0290&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Affiliates_vue_vue_type_template_id_d71b0290___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Affiliates_vue_vue_type_template_id_d71b0290___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);