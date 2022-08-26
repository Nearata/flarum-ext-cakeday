/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/ColorPreviewInput */ "flarum/common/components/ColorPreviewInput");
/* harmony import */ var flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_2__);




var isTrue = function isTrue(setting) {
  if (typeof setting === "string") {
    return !!parseInt(setting);
  }

  if (typeof setting === "boolean") {
    return setting;
  }
};

var trans = function trans(key) {
  return flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans("nearata-cakeday.admin.settings." + key);
};

flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add("nearata-cakeday", function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]("nearata-cakeday").registerSetting({
    setting: "nearata-cakeday.admin.new_members",
    label: trans("new_members"),
    type: "boolean"
  }).registerSetting(function () {
    var _this = this;

    var isNewMembers = this.setting("nearata-cakeday.admin.new_members")();
    return [isTrue(isNewMembers) ? [m(".Form-group", [m("label", trans("new_members_howlong")), m(".helpText", trans("new_members_howlong_help")), m("input", {
      "class": "FormControl",
      type: "number",
      bidi: this.setting("nearata-cakeday.admin.new_members_days"),
      autocomplete: "off",
      placeholder: "7",
      min: "1"
    })]), m(".Form-group", [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_1___default()), {
      onchange: function onchange(value) {
        return _this.setting("nearata-cakeday.admin.new_members_label")(value);
      },
      state: this.setting("nearata-cakeday.admin.new_members_label")()
    }, trans("new_members_changelabel"))])] : null];
  }).registerSetting(function () {
    return [m(".Form-group", [m("label", trans("cake_bg_color_label")), m(".helpText", trans("cake_bg_color_help")), m((flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_2___default()), {
      bidi: this.setting("nearata-cakeday.admin.cake_bg_color"),
      placeholder: "#FFD449"
    })]), m(".Form-group", [m("label", trans("cake_txt_color_label")), m(".helpText", trans("cake_txt_color_help")), m((flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_2___default()), {
      bidi: this.setting("nearata-cakeday.admin.cake_text_color"),
      placeholder: "#FFFFFF"
    })])];
  }).registerSetting({
    setting: "nearata-cakeday.admin.anniversaries_page",
    label: trans("anniversaries_page_label"),
    type: "boolean"
  }).registerPermission({
    icon: "fas fa-birthday-cake",
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans("nearata-cakeday.admin.permissions.can_view_anniversaries_page"),
    permission: "nearata-cakeday.can_view_anniversaries_page",
    tagScoped: true
  }, "view");
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/common/components/ColorPreviewInput":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['common/components/ColorPreviewInput']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/ColorPreviewInput'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map