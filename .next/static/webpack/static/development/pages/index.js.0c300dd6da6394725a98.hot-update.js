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

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            z-index:-1;\n            width: ", "rem;\n            height: 1rem;\n            border-radius:50%;\n            transition-duration:.45s;\n            position:absolute;\n            transition-duration:1.4s;\n            transition-timing-function: cubic-bezier(.43,-0.28,.25,1.37);\n            left: ", "px;\n            top: ", "px;\n            background:  ", ";\n            opacity: ", ";\n            animation: ", " 2s infinite;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */


var colors = ['#FF00CC', '#FF00CC', '#EE34D2', '#FF6EFF', '#50BFE6', '#AAF0D1', '#66FF66', '#CCFF00', '#FFFF66', '#FFFF66', '#FFCC33', '#FF9933', '#FF9966', '#FF6037', '#FD5B78', '#FF355E'];
var animation = ['shine2', 'shine1'];
function PartyBackground() {
  var _this = this;

  var _useUtils = Object(_hooks_useUtils__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      windowWidth = _useUtils.windowWidth,
      windowHeight = _useUtils.windowHeight,
      rnd = _useUtils.rnd;

  var createBall = function createBall() {
    var ballCss = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), rnd(), Math.random() * (windowWidth - 2), Math.random() * (windowHeight - 2), colors[Math.floor(Math.random() * colors.length)], Math.random(), animation[rnd(0, 1)]);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      key: Math.random(),
      className: "ball",
      css: ballCss,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    });
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=index.js.0c300dd6da6394725a98.hot-update.js.map