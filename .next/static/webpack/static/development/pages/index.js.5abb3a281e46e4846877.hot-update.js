webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PartyBackground.tsx":
/*!****************************************!*\
  !*** ./components/PartyBackground.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PartyBackground; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _hooks_useUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useUtils */ "./hooks/useUtils.ts");

var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/PartyBackground.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            height: ", "em;\n            transition-duration:.45s;\n            display:inline-block;\n            transition-duration:1.4s;\n            transition-timing-function: cubic-bezier(.43,-0.28,.25,1.37);\n            font-size: ", "px;\n            background:  ", ";\n            opacity: ", ";\n            animation: ", " 1s infinite;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            left: ", "px;\n            top: ", "px;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        color: ", ";\n        background-color: ", ";\n        box-shadow: 0 0.5em ", ", 0 -0.5em ", ", 0.5em 0 ", ", -0.5em 0 ", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */


var colors = ['#e76e55', '#FF00CC', '#EE34D2', '#FF6EFF', '#50BFE6', '#AAF0D1', '#66FF66', '#CCFF00', '#FFFF66', '#FFFF66', '#FFCC33', '#FF9933', '#FF9966', '#FF6037', '#FD5B78', '#FF355E'];
var animation = ['shine2', 'shine1', 'shine3'];
function PartyBackground() {
  var _this = this;

  var _useUtils = Object(_hooks_useUtils__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      windowWidth = _useUtils.windowWidth,
      windowHeight = _useUtils.windowHeight,
      rnd = _useUtils.rnd;

  var createBall = function createBall() {
    var w = rnd(0.5, 1);
    var h = rnd(0.5, 1);
    var color = colors[Math.floor(Math.random() * colors.length)];
    var spanCss = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), color, color, color, color, color, color);
    var containerCss = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), Math.random() * (windowWidth - 2), Math.random() * (windowHeight - 2));
    var ballCss = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), h, rnd(6, 10), color, Math.random(), animation[rnd(0, 2)]);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      key: Math.random(),
      className: "absolute",
      css: containerCss,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      css: ballCss,
      className: "ball",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 82
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
      css: spanCss,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 118
      }
    }, "1")));
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "fixed top-0 left-0 z-1-",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, Array.from({
    length: 200
  }, function (item) {
    return createBall();
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.5abb3a281e46e4846877.hot-update.js.map