(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/auth */ "./resources/js/mixins/auth.js");
/* harmony import */ var _mixins_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mixins_auth__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      galerias: [{
        galeria_id: 1,
        title: "Pre-fab homes",
        sub_titulo: "casa de 2 pisos, color amarillo",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        flex: 4,
        status: true
      }, {
        galeria_id: 2,
        title: "Favorite road trips",
        sub_titulo: "calle con una mira muy espectacular",
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        flex: 4,
        status: false
      }, {
        galeria_id: 3,
        title: "Best airlines",
        sub_titulo: "avión de primera clase, equipada con las mejores comodidades",
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        flex: 4,
        status: true
      }, {
        galeria_id: 4,
        title: "Favorite road trips",
        sub_titulo: "calle con una mira muy espectacular",
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        flex: 4,
        status: false
      }, {
        galeria_id: 5,
        title: "Pre-fab homes",
        sub_titulo: "casa de 2 pisos, color amarillo",
        src: "https://cdn.vuetifyjs.com/images/cards/girl.jpg",
        flex: 4,
        status: true
      }, {
        galeria_id: 6,
        title: "Favorite road trips",
        sub_titulo: "calle con una mira muy espectacular",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        flex: 4,
        status: false
      }, {
        galeria_id: 7,
        title: "Best airlines",
        sub_titulo: "avión de primera clase, equipada con las mejores comodidades",
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        flex: 4,
        status: false
      }, {
        galeria_id: 8,
        title: "Pre-fab homes",
        sub_titulo: "casa de 2 pisos, color amarillo",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        flex: 4,
        status: false
      }, {
        galeria_id: 9,
        title: "Favorite road trips",
        sub_titulo: "calle con una mira muy espectacular",
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        flex: 4,
        status: false
      }]
    };
  },
  mixins: [_mixins_auth__WEBPACK_IMPORTED_MODULE_0___default.a],
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=template&id=781a1980&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=template&id=781a1980& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mx-auto", attrs: { "max-width": "1250" } },
    [
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { attrs: { dense: "" } },
            _vm._l(_vm.galerias, function(galeria) {
              return _c(
                "v-col",
                { key: galeria.galeria_id, attrs: { cols: galeria.flex } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end",
                          attrs: {
                            src: galeria.src,
                            gradient:
                              "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                            height: "200px"
                          }
                        },
                        [
                          _c("v-card-title", {
                            domProps: { textContent: _vm._s(galeria.title) }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "text-right",
                              staticStyle: {
                                "margin-bottom": "5px",
                                "margin-right": "5px"
                              }
                            },
                            [
                              _vm.isAuthenticated && _vm.user.perfil
                                ? _c(
                                    "v-avatar",
                                    {
                                      attrs: {
                                        color: galeria.status ? "green" : "red",
                                        size: "36"
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "white--text text-h5" },
                                        [
                                          _vm._v(
                                            _vm._s(galeria.status ? "A" : "I") +
                                              " "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-input", { attrs: { height: "30px" } }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(galeria.sub_titulo) +
                                "\n                        "
                            )
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

/***/ "./resources/js/mixins/auth.js":
/*!*************************************!*\
  !*** ./resources/js/mixins/auth.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var user = document.head.querySelector('meta[name="user"]');
module.exports = {
  computed: {
    user: function user() {
      // return JSON.parse(user.content);
      return JSON.parse('{"id":1, "name":"jonyedu19", "perfil":1}');
    },
    isAuthenticated: function isAuthenticated() {
      //return !!user.content;
      return !!{
        "id": 1,
        "name": "jonyedu19",
        "perfil": 1
      };
    }
  }
};

/***/ }),

/***/ "./resources/js/views/sections/programa/ListaPrograma.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/sections/programa/ListaPrograma.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListaPrograma_vue_vue_type_template_id_781a1980___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaPrograma.vue?vue&type=template&id=781a1980& */ "./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=template&id=781a1980&");
/* harmony import */ var _ListaPrograma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListaPrograma.vue?vue&type=script&lang=js& */ "./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListaPrograma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListaPrograma_vue_vue_type_template_id_781a1980___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListaPrograma_vue_vue_type_template_id_781a1980___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/sections/programa/ListaPrograma.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaPrograma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListaPrograma.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaPrograma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=template&id=781a1980&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=template&id=781a1980& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaPrograma_vue_vue_type_template_id_781a1980___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListaPrograma.vue?vue&type=template&id=781a1980& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/sections/programa/ListaPrograma.vue?vue&type=template&id=781a1980&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaPrograma_vue_vue_type_template_id_781a1980___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaPrograma_vue_vue_type_template_id_781a1980___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);