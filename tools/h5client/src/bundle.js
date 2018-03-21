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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_angular@1.6.9@angular/angular.js":
/*!********************************************************!*\
  !*** ./node_modules/_angular@1.6.9@angular/angular.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/_angular@1.6.9@angular/index.js":
/*!******************************************************!*\
  !*** ./node_modules/_angular@1.6.9@angular/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./angular */ \"./node_modules/_angular@1.6.9@angular/angular.js\");\nmodule.exports = angular;\n\n\n//# sourceURL=webpack:///./node_modules/_angular@1.6.9@angular/index.js?");

/***/ }),

/***/ "./src/app/pages sync recursive ^\\.\\/.*\\.controller\\.js$":
/*!*****************************************************!*\
  !*** ./src/app/pages sync ^\.\/.*\.controller\.js$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./lobby.controller.js\": \"./src/app/pages/lobby.controller.js\",\n\t\"./login.controller.js\": \"./src/app/pages/login.controller.js\",\n\t\"./room.controller.js\": \"./src/app/pages/room.controller.js\",\n\t\"./stage.controller.js\": \"./src/app/pages/stage.controller.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/app/pages sync recursive ^\\\\.\\\\/.*\\\\.controller\\\\.js$\";\n\n//# sourceURL=webpack:///./src/app/pages_sync_^\\.\\/.*\\.controller\\.js$?");

/***/ }),

/***/ "./src/app/pages/lobby.controller.js":
/*!*******************************************!*\
  !*** ./src/app/pages/lobby.controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Page = __webpack_require__(/*! ./page.js */ \"./src/app/pages/page.js\")\r\n\r\nmodule.exports = PageLobby\r\n\r\nfunction PageLobby() {}\r\n\r\nPageLobby.onController = function($scope, pageEvent, pageName) {\r\n  $scope.click = function() {\r\n    Page.showPage(pageEvent, 'room');\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app/pages/lobby.controller.js?");

/***/ }),

/***/ "./src/app/pages/login.controller.js":
/*!*******************************************!*\
  !*** ./src/app/pages/login.controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Page = __webpack_require__(/*! ./page.js */ \"./src/app/pages/page.js\")\r\n\r\nmodule.exports = PageLogin\r\n\r\nfunction PageLogin() {}\r\n\r\nPageLogin.onController = function($scope, pageEvent, pageName) {\r\n  $scope.enable = true;\r\n  $scope.click = function() {\r\n    Page.showPage(pageEvent, 'lobby');\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app/pages/login.controller.js?");

/***/ }),

/***/ "./src/app/pages/page.js":
/*!*******************************!*\
  !*** ./src/app/pages/page.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Util = __webpack_require__(/*! ../util/util.js */ \"./src/app/util/util.js\")\r\n\r\nmodule.exports = Page\r\n\r\nfunction Page() {}\r\n\r\nPage.loadPage = function(app, page) {\r\n\r\n  app.directive('runoob' + Util.toUpper(page), function() {\r\n    return {\r\n      templateUrl: 'app/pages/' + page + '.html'\r\n    };\r\n  });\r\n\r\n  var pageX = __webpack_require__(\"./src/app/pages sync recursive ^\\\\.\\\\/.*\\\\.controller\\\\.js$\")(\"./\" + page + '.controller.js');\r\n\r\n  var onLoad = pageX.onLoad;\r\n  if (onLoad != null) {\r\n    onLoad(app);\r\n  }\r\n\r\n  function ctrl($scope, pageEvent) {\r\n    pageEvent.on('showPage', function(event, data) {\r\n      $scope.enable = (data == page);\r\n    }, $scope);\r\n    $scope.enable = false;\r\n    onController($scope, pageEvent, page);\r\n  }\r\n  var onController = pageX.onController;\r\n  if (onController != null) {\r\n    app.controller(page, ctrl);\r\n    ctrl.$inject = [\r\n      '$scope',\r\n      'pageEvent'\r\n    ];\r\n  }\r\n}\r\n\r\nPage.initPageEventGenerator = function(app) {\r\n  app.factory('pageEvent', pageEvent);\r\n\r\n  pageEvent.$inject = [\r\n    '$rootScope'\r\n  ];\r\n\r\n  function pageEvent($rootScope) {\r\n    var msgBus = {};\r\n    msgBus.emit = function(msg, data) {\r\n      data = data || {};\r\n      $rootScope.$emit(msg, data);\r\n    };\r\n    msgBus.on = function(msg, func, scope) {\r\n      var unbind = $rootScope.$on(msg, func);\r\n      if (scope) {\r\n        scope.$on('$destroy', unbind);\r\n      }\r\n    };\r\n    return msgBus;\r\n  }\r\n}\r\n\r\nPage.showPage = function(pageEvent, page) {\r\n  pageEvent.emit('showPage', page);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app/pages/page.js?");

/***/ }),

/***/ "./src/app/pages/room.controller.js":
/*!******************************************!*\
  !*** ./src/app/pages/room.controller.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Page = __webpack_require__(/*! ./page.js */ \"./src/app/pages/page.js\")\r\n\r\nmodule.exports = PageRoom\r\n\r\nfunction PageRoom() {}\r\n\r\nPageRoom.onController = function($scope, pageEvent, pageName) {\r\n  $scope.click = function() {\r\n    Page.showPage(pageEvent, 'login');\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app/pages/room.controller.js?");

/***/ }),

/***/ "./src/app/pages/stage.controller.js":
/*!*******************************************!*\
  !*** ./src/app/pages/stage.controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Page = __webpack_require__(/*! ./page.js */ \"./src/app/pages/page.js\")\r\n\r\nmodule.exports = PageStage\r\n\r\nfunction PageStage() {}\r\n\r\nPageStage.onLoad = function(app) {\r\n  Page.loadPage(app, 'login');\r\n  Page.loadPage(app, 'lobby');\r\n  Page.loadPage(app, 'room');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app/pages/stage.controller.js?");

/***/ }),

/***/ "./src/app/util/util.js":
/*!******************************!*\
  !*** ./src/app/util/util.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = Util\r\n\r\nfunction Util() {}\r\n\r\nUtil.toUpper = function(s) {\r\n  return s.substring(0, 1).toUpperCase() + s.substring(1);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app/util/util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! angular */ \"./node_modules/_angular@1.6.9@angular/index.js\")\r\nvar Page = __webpack_require__(/*! ./app/pages/page.js */ \"./src/app/pages/page.js\")\r\n\r\nfunction startApp() {\r\n  var app = angular.module(\"app\", []);\r\n  closePreload(app);\r\n  Page.initPageEventGenerator(app);\r\n  Page.loadPage(app, 'stage');\r\n}\r\n\r\nstartApp();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });