webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GameBoard.tsx":
/*!**********************************!*\
  !*** ./components/GameBoard.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameBoard; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
/* harmony import */ var _hooks_useUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useUtils */ "./hooks/useUtils.ts");
/* harmony import */ var _GuessRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GuessRow */ "./components/GuessRow.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var _SettingsTool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SettingsTool */ "./components/SettingsTool.tsx");
/* harmony import */ var _NumberSign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NumberSign */ "./components/NumberSign.tsx");
/* harmony import */ var _PartyBackground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PartyBackground */ "./components/PartyBackground.tsx");
/* harmony import */ var _Confetti__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Confetti */ "./components/Confetti.tsx");

var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/GameBoard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var defaultGuess = {
  value: [],
  round: 1,
  result: {},
  passed: false
};

var createControlArray = function createControlArray(numberArray) {
  return numberArray.map(function (n) {
    return {
      value: n.value,
      checked: false
    };
  });
};

function GameBoard() {
  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_2__["GameContext"]),
      digits = _useContext.digits,
      rounds = _useContext.rounds,
      gameStarted = _useContext.gameStarted,
      resetGame = _useContext.resetGame,
      numberArray = _useContext.numberArray,
      endGame = _useContext.endGame,
      gameResult = _useContext.gameResult;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([_objectSpread({}, defaultGuess)]),
      guesses = _useState[0],
      setGuesses = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      partyModeOn = _useState2[0],
      setPartyModeOn = _useState2[1];

  var _useUtils = Object(_hooks_useUtils__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      scrollTop = _useUtils.scrollTop;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setGuesses([_objectSpread({}, defaultGuess)]);
  }, [gameStarted]);

  var returnGuessRow = function returnGuessRow(guess) {
    return __jsx(_GuessRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: guess.round,
      guess: guess,
      guessNumber: guessNumber,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 44
      }
    });
  };

  var guessNumber = function guessNumber(guessArray) {
    var controlArray = createControlArray(numberArray);
    var result = {};
    var remaining = guessArray.map(function (val, i) {
      if (val === controlArray[i].value) {
        controlArray[i].checked = true;
        result.plus = result.plus ? result.plus + 1 : 1;
      } else {
        return val;
      }
    });
    controlArray.filter(function (el) {
      return !el.checked;
    }).map(function (el) {
      if (remaining.includes(el.value)) {
        var index = remaining.findIndex(function (n) {
          return n === el.value;
        });
        remaining.splice(index, 1);
        result.minus = result.minus ? result.minus + 1 : 1;
      }
    });

    if (!result.minus && !result.plus) {
      result.missed = true;
    }

    var guess = {
      value: guessArray,
      round: guesses.length,
      result: result,
      passed: true
    };
    var newList = guesses.concat();
    newList.pop();
    newList.push(guess);

    if (result.plus === digits || rounds === guesses.length) {
      endGame(result.plus === digits);
      scrollTop();
    } else {
      if (!rounds || guesses.length < rounds) {
        newList.push(_objectSpread({}, defaultGuess, {
          round: guesses.length + 1
        }));
      }
    }

    setGuesses(newList);
  };

  var remainingRounds = rounds - guesses.length;
  var myMessage = !gameResult ? gameStarted ? "You have ".concat(rounds === 0 ? 'unlimited' : rounds, " rounds to guess my number. Start writing your guess and see the results ;)") : 'Set your preferences and start playing!' : "You have ".concat(gameResult, "!");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, partyModeOn && __jsx(_PartyBackground__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "px-4 py-6 lg:px-20 md:py-8 shadow bg-white w-full sm-grid-sm md:w-grid-md lg:w-grid-lg xl:w-grid-xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "nes-container px-4 py-6 lg:px-8 with-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "A Cool's Game"), __jsx("div", {
    className: " ml-12 md:ml-20 mt-12 md:mt-8 flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "nes-balloon from-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "text-sm md:text-base",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, myMessage))), __jsx("i", {
    className: "-mt-8 nes-octocat animate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }), !gameResult && rounds !== 0 && remainingRounds <= 2 && __jsx("span", {
    className: "ml-2 nes-text is-error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 68
    }
  }, "Ups! You have ".concat(remainingRounds, " rounds left.")), gameResult === 'won' && __jsx(_Confetti__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 37
    }
  }), __jsx(_SettingsTool__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx(_NumberSign__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), gameStarted && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, guesses.map(returnGuessRow), __jsx("div", {
    className: "pt-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: resetGame,
    label: "Reset game",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 39
    }
  }))))), __jsx("label", {
    className: "w-full text-right mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "nes-checkbox is-dark",
    checked: partyModeOn,
    onChange: function onChange() {
      return setPartyModeOn(function (prevMode) {
        return !prevMode;
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "Enable party mode")));
}

/***/ })

})
//# sourceMappingURL=index.js.0910db94f85015786d81.hot-update.js.map