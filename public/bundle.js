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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:\\Рабочий стол\\Файлы\\JS\\TestApp\\src\\App.js: Unexpected token (31:105)\n\n\u001b[0m \u001b[90m 29 | \u001b[39m      }\n \u001b[90m 30 | \u001b[39m    })\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 31 | \u001b[39m    \u001b[33mVK\u001b[39m\u001b[33m.\u001b[39m\u001b[33mApi\u001b[39m\u001b[33m.\u001b[39mcall(\u001b[32m'friends.get'\u001b[39m\u001b[33m,\u001b[39m {user_ids\u001b[33m:\u001b[39m id\u001b[33m,\u001b[39m order\u001b[33m:\u001b[39m \u001b[32m'random'\u001b[39m\u001b[33m,\u001b[39m count\u001b[33m:\u001b[39m \u001b[35m5\u001b[39m\u001b[33m,\u001b[39m fields\u001b[33m:\u001b[39m \u001b[32m'first_name'\u001b[39m\u001b[33m,\u001b[39m\u001b[32m'last_name'\u001b[39m}\u001b[33m,\u001b[39m (r) \u001b[33m=>\u001b[39m {\n \u001b[90m    | \u001b[39m                                                                                                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 32 | \u001b[39m      \u001b[36mconst\u001b[39m list \u001b[33m=\u001b[39m infoDiv\u001b[33m.\u001b[39mquerySelector(\u001b[32m'.vk-friends'\u001b[39m)\u001b[33m.\u001b[39mchildren\u001b[33m;\u001b[39m\n \u001b[90m 33 | \u001b[39m      \u001b[36mif\u001b[39m(r\u001b[33m.\u001b[39mresponse) {\n \u001b[90m 34 | \u001b[39m        console\u001b[33m.\u001b[39mlog(r)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map