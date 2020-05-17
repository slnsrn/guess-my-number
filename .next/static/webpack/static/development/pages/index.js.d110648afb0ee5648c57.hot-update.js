webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NumberSign.tsx":
/*!***********************************!*\
  !*** ./components/NumberSign.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberSign; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/NumberSign.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function NumberSign() {
  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_2__["GameContext"]),
      numberArray = _useContext.numberArray,
      gameResult = _useContext.gameResult;

  if (!numberArray) {
    return null;
  }

  var digitFrame = function digitFrame(digit, i) {
    return __jsx("input", {
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'is-error': gameResult === 'lost',
        'text-reddish': gameResult === 'won'
      }, 'nes-input text-center text-xl custom-padding'),
      disabled: true,
      value: digit.hidden ? '?' : digit.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    });
  };

  return __jsx("div", {
    className: "flex mt-6 mb-16 w-full justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, numberArray.map(digitFrame));
}

/***/ })

})
//# sourceMappingURL=index.js.d110648afb0ee5648c57.hot-update.js.map