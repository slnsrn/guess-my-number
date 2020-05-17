webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SettingsTool.tsx":
/*!*************************************!*\
  !*** ./components/SettingsTool.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsTool; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
/* harmony import */ var _hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useUtils */ "./hooks/useUtils.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/SettingsTool.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var availableDigits = [3, 4, 5, 6];
var availableRounds = [0, 6, 8, 10];
function SettingsTool() {
  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_1__["GameContext"]),
      digits = _useContext.digits,
      setDigits = _useContext.setDigits,
      startGame = _useContext.startGame,
      rounds = _useContext.rounds,
      setRounds = _useContext.setRounds,
      gameStarted = _useContext.gameStarted;

  var _useUtils = Object(_hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      scrollTop = _useUtils.scrollTop;

  var digitChoices = __jsx("div", {
    className: "my-4 w-full sm:w-1/2 md:w-full flex flex-col md:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "mr-2 md:mr-4 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Digits:"), availableDigits.map(function (digit) {
    return __jsx("label", {
      key: digit,
      className: "md:mr-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 39
      }
    }, __jsx("input", {
      type: "radio",
      className: "nes-radio pink",
      checked: digit === digits,
      onChange: function onChange(event) {
        setDigits(parseInt(event.target.value));
      },
      value: digit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 78
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 288
      }
    }, "".concat(digit, " digits")));
  }));

  var roundChoices = __jsx("div", {
    className: "my-4 w-full sm:w-1/2 md:w-full flex flex-col md:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "mr-2 md:mr-4 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Rounds:"), availableRounds.map(function (round) {
    return __jsx("label", {
      key: round,
      className: " md:mr-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 39
      }
    }, __jsx("input", {
      type: "radio",
      className: "nes-radio pink",
      checked: round === rounds,
      onChange: function onChange(event) {
        setRounds(parseInt(event.target.value));
      },
      value: round,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 79
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 288
      }
    }, round === 0 ? 'unlimited' : "".concat(round, " rounds")));
  }));

  var handleClick = function handleClick() {
    scrollTop();
    startGame();
  };

  return __jsx("div", {
    className: "mt-4 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }
  }, !gameStarted && __jsx("div", {
    className: "w-full flex flex-col md:flex-col transition",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 16
    }
  }, digitChoices, roundChoices), !gameStarted && __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClick,
    label: "Start game",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 30
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.205940297c96bb6d824d.hot-update.js.map