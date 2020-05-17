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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");

var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/GuessRow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function GuessRow(_ref) {
  var guess = _ref.guess,
      guessNumber = _ref.guessNumber,
      currentRound = _ref.currentRound;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_3__["GameContext"]),
      digits = _useContext.digits,
      giveHint = _useContext.giveHint,
      hintsGiven = _useContext.hintsGiven;

  var round = guess.round,
      result = guess.result,
      value = guess.value,
      passed = guess.passed;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(value),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hintGiven = _useState2[0],
      setHintGiven = _useState2[1];

  var inputRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

  var handleUserKeyPress = function handleUserKeyPress(event) {
    var keyCode = event.keyCode;

    if (keyCode === 13 && !passed && inputValue.length === digits) {
      guessNumber(inputValue);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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

  var onHintClick = function onHintClick() {
    setHintGiven(true);
    giveHint();
  };

  var onFocus = function onFocus() {
    if (inputValue.length === 0 && hintGiven) {
      setInputValue(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(hintsGiven));
    }
  };

  var placeholder = Array.from({
    length: digits
  }, function (item, i) {
    return hintsGiven[i] || 'X';
  }).join(' ');
  var id = "guessInput".concat(round);
  var showHint = !passed && !hintGiven && currentRound > 2 && hintsGiven.length < digits - 1;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'relative pb-32': currentRound > 2 && !passed
    }, 'flex flex-col sm:flex-row mx-auto mb-4'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-56 mr-2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("input", {
    autoFocus: true,
    autoComplete: "off",
    ref: inputRef,
    className: "nes-input focus:outline-none text-center custom-padding",
    disabled: passed,
    type: "tel",
    placeholder: placeholder,
    id: id,
    value: inputValue.join(' '),
    onChange: function onChange(event) {
      return handleChange(event.target.value);
    },
    maxLength: digits * 2 - 1,
    onFocus: onFocus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  })), !passed && __jsx("img", {
    src: "press.png",
    className: "w-auto h-10 md:h-12",
    style: {
      imageRendering: 'pixelated'
    },
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), showHint && __jsx("div", {
    className: "p-4 absolute bottom-0 right-0 transition",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "hint.png",
    className: " w-auto h-8 md:h-10  md:ml-2 self-center animateOpacity",
    style: {
      imageRendering: 'pixelated'
    },
    onClick: onHintClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 77
    }
  })) //   <div className="nes-balloon hint from-right text-xs bottom-0 right-0 flex">
  //     <p>Do you need a hint?</p>
  //     <img src='hint.png' className=" w-auto h-8 md:h-10  md:ml-2 self-center animateOpacity" style={{imageRendering: 'pixelated'}} onClick={onHintClick}></img>
  // </div>
  ), passed && __jsx("div", {
    className: "text-left flex flex-col sm:flex-row mt-2 lg:mt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, result.missed && __jsx("div", {
    className: "self-center nes-badge wide custom-font-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "is-error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 94
    }
  }, "Ups! you missed it!")), result.plus && __jsx("div", {
    className: "self-center nes-badge plus custom-font-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 31
    }
  }, __jsx("span", {
    className: "is-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 92
    }
  }, "".concat(result.plus, " cuk!"))), result.minus && __jsx("div", {
    className: "self-center nes-badge wide custom-font-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 32
    }
  }, __jsx("span", {
    className: "is-warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 93
    }
  }, "".concat(result.minus, " position wrong!")))));
}

/***/ })

})
//# sourceMappingURL=index.js.82397973f21ca9598ed1.hot-update.js.map