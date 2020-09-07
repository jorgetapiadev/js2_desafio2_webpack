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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/three.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/one.js":
/*!********************!*\
  !*** ./src/one.js ***!
  \********************/
/*! exports provided: function1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"function1\", function() { return function1; });\nvar numbers = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];\nvar function1 = function function1(arr) {\n  var resultado = [];\n  numbers.forEach(function (element) {\n    if (typeof element === \"number\") {\n      resultado.push(element * 4);\n    }\n  });\n  resultado = resultado.filter(function (elementos) {\n    if (elementos > 8) {\n      return elementos;\n    }\n  });\n  return resultado;\n};\nfunction1(numbers);\nconsole.log(function1(numbers));\ndocument.write('<p>One Js</p>');\ndocument.write('<hr>');\ndocument.write(function1(numbers));\ndocument.write('<hr>');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb25lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL29uZS5qcz85MmExIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBudW1iZXJzID0gWzEsIDQsIDIzLCAtNCwgJ29uZScsIDYsIDAsIDEuMSwgMy4xNDE1XTtcblxuZXhwb3J0IGNvbnN0IGZ1bmN0aW9uMSA9IChhcnIpID0+IHtcblxuICAgIGxldCByZXN1bHRhZG8gPSBbXTtcblxuICAgIG51bWJlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZWxlbWVudCkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJlc3VsdGFkby5wdXNoKGVsZW1lbnQgKiA0KTtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXN1bHRhZG8gPSByZXN1bHRhZG8uZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50b3MpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRvcyA+IDgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50b3M7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0YWRvO1xuXG59O1xuXG4gZnVuY3Rpb24xKG51bWJlcnMpO1xuY29uc29sZS5sb2coZnVuY3Rpb24xKG51bWJlcnMpKTtcbmRvY3VtZW50LndyaXRlKCc8cD5PbmUgSnM8L3A+Jyk7XG5kb2N1bWVudC53cml0ZSgnPGhyPicpO1xuZG9jdW1lbnQud3JpdGUoZnVuY3Rpb24xKG51bWJlcnMpKVxuZG9jdW1lbnQud3JpdGUoJzxocj4nKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/one.js\n");

/***/ }),

/***/ "./src/three.js":
/*!**********************!*\
  !*** ./src/three.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one */ \"./src/one.js\");\n/* harmony import */ var _two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two */ \"./src/two.js\");\n\n\ndocument.write('<hr>');\n\nvar function3 = function function3(func1, func2) {\n  var resultOne = func1;\n  var resultTwo = func2;\n  var ObjectResults = {\n    \"status\": \"OK\",\n    \"one\": resultOne,\n    \"two\": resultTwo\n  };\n  return ObjectResults;\n};\n\nconsole.log(function3(_one__WEBPACK_IMPORTED_MODULE_0__[\"function1\"], _two__WEBPACK_IMPORTED_MODULE_1__[\"function2\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhyZWUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhyZWUuanM/MzFkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmdW5jdGlvbjEgfSBmcm9tIFwiLi9vbmVcIjtcbmltcG9ydCB7IGZ1bmN0aW9uMiB9IGZyb20gXCIuL3R3b1wiO1xuIFxuZG9jdW1lbnQud3JpdGUoJzxocj4nKTtcbmNvbnN0IGZ1bmN0aW9uMyA9IChmdW5jMSwgZnVuYzIpID0+IHtcbiAgICBsZXQgcmVzdWx0T25lID0gZnVuYzE7XG4gICAgbGV0IHJlc3VsdFR3byA9IGZ1bmMyO1xuXG4gICAgbGV0IE9iamVjdFJlc3VsdHMgPSB7XG4gICAgICAgIFwic3RhdHVzXCI6IFwiT0tcIixcbiAgICAgICAgXCJvbmVcIjogcmVzdWx0T25lLFxuICAgICAgICBcInR3b1wiOiByZXN1bHRUd29cbiAgICB9O1xuICAgIHJldHVybiBPYmplY3RSZXN1bHRzO1xufTtcbmNvbnNvbGUubG9nKGZ1bmN0aW9uMyhmdW5jdGlvbjEsIGZ1bmN0aW9uMikpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/three.js\n");

/***/ }),

/***/ "./src/two.js":
/*!********************!*\
  !*** ./src/two.js ***!
  \********************/
/*! exports provided: function2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"function2\", function() { return function2; });\nvar function2 = function function2(Object) {\n  var Objecttostring = JSON.stringify(Object);\n  return Objecttostring;\n};\nvar usersJson = [{\n  Nombre: \"Elizabeth\",\n  Edad: 35\n}, {\n  Nombre: \"Andrés\",\n  Edad: 36\n}, {\n  nombre: \"Renata\",\n  edad: 15\n}, {\n  Nombre: \"Mauricio\",\n  Edad: 16\n}, {\n  Nombre: \"Magdalena\",\n  Edad: 14\n}];\nfunction2(usersJson);\nconsole.log(function2(usersJson));\ndocument.write('<p>Two Js</p>');\ndocument.write('<hr>');\ndocument.write(function2(usersJson));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHdvLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3R3by5qcz8yM2MxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmdW5jdGlvbjIgPSBPYmplY3QgPT4ge1xuICAgIGxldCBPYmplY3R0b3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KE9iamVjdCk7XG5cbiAgICByZXR1cm4gT2JqZWN0dG9zdHJpbmc7XG59O1xuXG5sZXQgdXNlcnNKc29uID0gW1xuICAgIHtcbiAgICAgICAgTm9tYnJlOiBcIkVsaXphYmV0aFwiLFxuICAgICAgICBFZGFkOiAzNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgTm9tYnJlOiBcIkFuZHLDqXNcIixcbiAgICAgICAgRWRhZDogMzYsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5vbWJyZTogXCJSZW5hdGFcIixcbiAgICAgICAgZWRhZDogMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIE5vbWJyZTogXCJNYXVyaWNpb1wiLFxuICAgICAgICBFZGFkOiAxNixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgTm9tYnJlOiBcIk1hZ2RhbGVuYVwiLFxuICAgICAgICBFZGFkOiAxNCxcbiAgICB9XG5cbl07XG5cbmZ1bmN0aW9uMih1c2Vyc0pzb24pO1xuY29uc29sZS5sb2coZnVuY3Rpb24yKHVzZXJzSnNvbikpO1xuIGRvY3VtZW50LndyaXRlKCc8cD5Ud28gSnM8L3A+Jyk7XG4gZG9jdW1lbnQud3JpdGUoJzxocj4nKTtcbmRvY3VtZW50LndyaXRlKGZ1bmN0aW9uMih1c2Vyc0pzb24pKVxuICJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/two.js\n");

/***/ })

/******/ });