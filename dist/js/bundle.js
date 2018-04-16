/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _navbar = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\n\nvar _edit = __webpack_require__(/*! ./edit */ \"./src/js/edit.js\");\n\n(function init() {\n  window.showEdit = _edit.showEdit;\n  (0, _navbar.addEventLinks)();\n})();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/edit.js":
/*!************************!*\
  !*** ./src/js/edit.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.showEdit = void 0;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar _buildDivEdit = function _buildDivEdit(title, value, type) {\n  return \"<div data-js=\\\"box-edit\\\" class=\\\"box-edit\\\">\\n\\t\\t<h5 class=\\\"box-edit__title\\\">\".concat(title, \"</h5>\\n\\t\\t<form>\\n\\t\\t\\t<input data-js=\\\"input-edit\\\" type=\\\"text\\\" class=\\\"box-edit__field\\\" value=\\\"\").concat(value, \"\\\">\\n\\t\\t\\t<button type=\\\"button\\\" data-js=\\\"btn-update\\\" data-js-type=\\\"\").concat(type, \"\\\" class=\\\"box-edit__button\\\">SAVE</button>\\n\\t\\t\\t<button type=\\\"button\\\" data-js=\\\"btn-cancel-update\\\" class=\\\"box-edit__button box-edit__button--nocolor\\\">CANCEL</button>\\n\\t\\t</form>\\n\\t</div>\");\n};\n\nvar _titleTypes = {\n  city: 'CITY, STATE & ZIP',\n  phone: 'PHONE NUMBER',\n  site: 'PERSONAL SITE',\n  name: 'NAME'\n};\n\nvar save = function save(el) {\n  var elstoUpdate = _toConsumableArray(document.querySelectorAll(el));\n\n  var newValue = document.querySelector('[data-js=\"input-edit\"]').value || '';\n  elstoUpdate.forEach(function (el) {\n    return el.textContent = newValue;\n  });\n};\n\nvar cancelEdit = function cancelEdit() {\n  var boxs = _toConsumableArray(document.querySelectorAll('[data-js=\"box-edit\"]'));\n\n  boxs.forEach(function (box) {\n    return box.remove();\n  });\n};\n\nvar addEventInButtons = function addEventInButtons() {\n  var btnupdate = document.querySelector('[data-js=\"btn-update\"]');\n  var btnCancelupdate = document.querySelector('[data-js=\"btn-cancel-update\"]');\n  btnupdate.addEventListener('click', function () {\n    save(\"[data-js-value=\\\"\".concat(this.dataset.jsType, \"\\\"]\"));\n    cancelEdit();\n  }, false);\n  btnCancelupdate.addEventListener('click', cancelEdit, false);\n};\n\nvar showEdit = function showEdit(type) {\n  cancelEdit();\n  var elementView = document.querySelector(\"[data-js='\".concat(type, \"']\"));\n  var title = _titleTypes[type];\n  var value = elementView ? elementView.textContent.trim() : '';\n  elementView.innerHTML += _buildDivEdit(title, value, type);\n  window.setTimeout(function () {\n    addEventInButtons();\n  }, 1000);\n};\n\nexports.showEdit = showEdit;\n\n//# sourceURL=webpack:///./src/js/edit.js?");

/***/ }),

/***/ "./src/js/http.js":
/*!************************!*\
  !*** ./src/js/http.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.http = void 0;\nvar http = {\n  get: function get(url) {\n    return fetch(url);\n  }\n};\nexports.http = http;\n\n//# sourceURL=webpack:///./src/js/http.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addEventLinks = void 0;\n\nvar _http = __webpack_require__(/*! ./http */ \"./src/js/http.js\");\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar _ROUTES = [{\n  link: 'settings',\n  page: 'settings.html'\n}, {\n  link: 'about',\n  page: 'about.html'\n}];\n\nvar _links = _toConsumableArray(document.querySelectorAll(\"[data-js='link-navbar']\") || []);\n\nvar _contentRoute = document.querySelector('[data-js=\"route-content\"]');\n\nvar removeSelectedLinks = function removeSelectedLinks() {\n  return _links.forEach(function (link) {\n    return link.classList.remove('nav__list__item--active');\n  });\n};\n\nvar addEventLinks = function addEventLinks() {\n  _links.forEach(function (link) {\n    link.addEventListener('click', function (e) {\n      removeSelectedLinks();\n      e.target.classList.toggle('nav__list__item--active');\n\n      _http.http.get(\"\".concat(e.target.textContent, \".html\")).then(function (resp) {\n        return resp.text().then(function (a) {\n          return _contentRoute.innerHTML = a;\n        });\n      });\n    }, false);\n  });\n};\n\nexports.addEventLinks = addEventLinks;\n\n//# sourceURL=webpack:///./src/js/navbar.js?");

/***/ })

/******/ });