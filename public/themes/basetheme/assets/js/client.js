(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client"],{

/***/ "./node_modules/vue-loader/lib/index.js?!./themes/basetheme/assets/vue/pages/client.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./themes/basetheme/assets/vue/pages/client.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tcreated () {\r\n\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://localhost:666/api/client`)\r\n\t\t.then(response => {\r\n\t\t\tthis.clients = response.data\r\n\t\t})\r\n\t\t.catch(e => {\r\n\t\t\tthis.errors.push(e)\r\n\t\t})\r\n\t},\r\n\tdata () {\r\n\t\treturn {\r\n\t\t\tclients: [],\r\n\t\t\terrors: []\r\n\t\t}\r\n\t},\r\n\t\r\n});\r\n\n\n//# sourceURL=webpack:///./themes/basetheme/assets/vue/pages/client.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/basetheme/assets/vue/pages/client.vue?vue&type=template&id=32fc8606&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/basetheme/assets/vue/pages/client.vue?vue&type=template&id=32fc8606& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"h1\", [_vm._v(\"Client\")]),\n    _vm._v(\" \"),\n    _c(\n      \"ul\",\n      _vm._l(_vm.clients, function(client, index) {\n        return _c(\"li\", [_vm._v(\"\\n\\t\\t\" + _vm._s(client.nama) + \"\\n\\t\\t\")])\n      }),\n      0\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./themes/basetheme/assets/vue/pages/client.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./themes/basetheme/assets/vue/pages/client.vue":
/*!******************************************************!*\
  !*** ./themes/basetheme/assets/vue/pages/client.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_vue_vue_type_template_id_32fc8606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.vue?vue&type=template&id=32fc8606& */ \"./themes/basetheme/assets/vue/pages/client.vue?vue&type=template&id=32fc8606&\");\n/* harmony import */ var _client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.vue?vue&type=script&lang=js& */ \"./themes/basetheme/assets/vue/pages/client.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _client_vue_vue_type_template_id_32fc8606___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _client_vue_vue_type_template_id_32fc8606___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (true) {\n  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ \"./node_modules/vue-hot-reload-api/dist/index.js\")\n  api.install(__webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\"))\n  if (api.compatible) {\n    module.hot.accept()\n    if (!module.hot.data) {\n      api.createRecord('32fc8606', component.options)\n    } else {\n      api.reload('32fc8606', component.options)\n    }\n    module.hot.accept(/*! ./client.vue?vue&type=template&id=32fc8606& */ \"./themes/basetheme/assets/vue/pages/client.vue?vue&type=template&id=32fc8606&\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _client_vue_vue_type_template_id_32fc8606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.vue?vue&type=template&id=32fc8606& */ \"./themes/basetheme/assets/vue/pages/client.vue?vue&type=template&id=32fc8606&\");\n(function () {\n      api.rerender('32fc8606', {\n        render: _client_vue_vue_type_template_id_32fc8606___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n        staticRenderFns: _client_vue_vue_type_template_id_32fc8606___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]\n      })\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })\n  }\n}\ncomponent.options.__file = \"themes/basetheme/assets/vue/pages/client.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./themes/basetheme/assets/vue/pages/client.vue?");

/***/ }),

/***/ "./themes/basetheme/assets/vue/pages/client.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./themes/basetheme/assets/vue/pages/client.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib??vue-loader-options!./client.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./themes/basetheme/assets/vue/pages/client.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./themes/basetheme/assets/vue/pages/client.vue?");

/***/ }),

/***/ "./themes/basetheme/assets/vue/pages/client.vue?vue&type=template&id=32fc8606&":
/*!*************************************************************************************!*\
  !*** ./themes/basetheme/assets/vue/pages/client.vue?vue&type=template&id=32fc8606& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_template_id_32fc8606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./client.vue?vue&type=template&id=32fc8606& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/basetheme/assets/vue/pages/client.vue?vue&type=template&id=32fc8606&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_template_id_32fc8606___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_template_id_32fc8606___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./themes/basetheme/assets/vue/pages/client.vue?");

/***/ })

}]);