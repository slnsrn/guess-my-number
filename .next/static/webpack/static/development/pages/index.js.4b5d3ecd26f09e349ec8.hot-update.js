webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GuessRow.tsx":
/*!*********************************!*\
  !*** ./components/GuessRow.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuessRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/GuessRow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function GuessRow(_ref) {
  var guess = _ref.guess,
      guessNumber = _ref.guessNumber;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_1__["GameContext"]),
      digits = _useContext.digits;

  var round = guess.round,
      result = guess.result,
      value = guess.value,
      passed = guess.passed;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var handleUserKeyPress = function handleUserKeyPress(event) {
    var keyCode = event.keyCode;

    if (keyCode === 13 && !passed && inputValue.length === digits) {
      guessNumber(inputValue);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("keydown", handleUserKeyPress);
    return function () {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  var handleChange = function handleChange(value) {
    value = value.replace(/\D/g, '');
    setInputValue(Array.from(value));
  };

  var handleClick = function handleClick() {
    if (inputValue.length !== digits) return false;
    guessNumber(inputValue);
  };

  var id = "guessInput".concat(round);
  return __jsx("div", {
    className: "flex flex-col sm:flex-row mx-auto mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-56 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("input", {
    autoFocus: true,
    autoComplete: "off",
    ref: inputRef,
    className: "nes-input focus:outline-none text-center custom",
    disabled: passed,
    type: "tel",
    placeholder: "Round ".concat(round),
    id: id,
    value: inputValue.join(' '),
    onChange: function onChange(event) {
      return handleChange(event.target.value);
    },
    maxLength: digits * 2 - 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), !passed && __jsx("img", {
    src: "press.png",
    className: "ml-2 w-auto h-12",
    style: {
      imageRendering: 'pixelated'
    },
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  })), passed && __jsx("div", {
    className: "text-left flex flex-col sm:flex-row mt-2 lg:mt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, result.missed && __jsx("div", {
    className: "self-center nes-badge wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "is-error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 77
    }
  }, "Ups! you missed it!")), result.plus && __jsx("div", {
    className: "self-center nes-badge plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 31
    }
  }, __jsx("span", {
    className: "is-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 75
    }
  }, "".concat(result.plus, " cuk!"))), result.minus && __jsx("div", {
    className: "self-center nes-badge wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 32
    }
  }, __jsx("span", {
    className: "is-warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 76
    }
  }, "".concat(result.minus, " position wrong!")))));
}

/***/ })

})
//# sourceMappingURL=index.js.4b5d3ecd26f09e349ec8.hot-update.js.map