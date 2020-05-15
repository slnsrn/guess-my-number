module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.tsx":
/*!*******************************!*\
  !*** ./components/Button.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Button({
  label,
  onClick,
  disabled = false,
  mobileAlign = 'right'
}) {
  return __jsx("div", {
    className: `w-full mt-8 text-${mobileAlign} md:text-right`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: onClick,
    disabled: disabled,
    className: "nes-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 14
    }
  }, label));
}

/***/ }),

/***/ "./components/Confetti.tsx":
/*!*********************************!*\
  !*** ./components/Confetti.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Confetti; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useUtils */ "./hooks/useUtils.ts");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/Confetti.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


let containerWidth;
function Confetti() {
  const {
    windowWidth,
    rnd
  } = Object(_hooks_useUtils__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    containerWidth = document.getElementsByClassName('nes-container')[0].clientWidth - 50;
  }, []);

  const confetti = i => {
    return __jsx("span", {
      key: i,
      className: `particle c${rnd(1, 4)}`,
      style: {
        top: rnd(10, 50),
        left: rnd(0, containerWidth),
        width: rnd(6, 8) + 'px',
        height: rnd(3, 4) + 'px',
        animationDelay: rnd(0, 30) / 10 + 's'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 16
      }
    });
  };

  return __jsx("div", {
    className: "confetti relative h-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, Array.from({
    length: windowWidth / 50 * 10
  }, (item, i) => confetti(i)));
}

/***/ }),

/***/ "./components/GameBoard.tsx":
/*!**********************************!*\
  !*** ./components/GameBoard.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameBoard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
/* harmony import */ var _hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useUtils */ "./hooks/useUtils.ts");
/* harmony import */ var _GuessRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GuessRow */ "./components/GuessRow.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var _SettingsTool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SettingsTool */ "./components/SettingsTool.tsx");
/* harmony import */ var _NumberSign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NumberSign */ "./components/NumberSign.tsx");
/* harmony import */ var _PartyBackground__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PartyBackground */ "./components/PartyBackground.tsx");
/* harmony import */ var _Confetti__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Confetti */ "./components/Confetti.tsx");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/GameBoard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const defaultGuess = {
  value: [],
  round: 1,
  result: {},
  passed: false
};

const createControlArray = numberArray => {
  return numberArray.map(n => {
    return {
      value: n.value,
      checked: false
    };
  });
};

function GameBoard() {
  const {
    digits,
    rounds,
    gameStarted,
    resetGame,
    numberArray,
    endGame,
    gameResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_1__["GameContext"]);
  const {
    0: guesses,
    1: setGuesses
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([_objectSpread({}, defaultGuess)]);
  const {
    0: partyModeOn,
    1: setPartyModeOn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    scrollTop
  } = Object(_hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setGuesses([_objectSpread({}, defaultGuess)]);
  }, [gameStarted]);

  const returnGuessRow = guess => __jsx(_GuessRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: guess.round,
    guess: guess,
    guessNumber: guessNumber,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 44
    }
  });

  const guessNumber = guessArray => {
    const controlArray = createControlArray(numberArray);
    let result = {};
    const remaining = guessArray.map((val, i) => {
      if (val === controlArray[i].value) {
        controlArray[i].checked = true;
        result.plus = result.plus ? result.plus + 1 : 1;
      } else {
        return val;
      }
    });
    controlArray.filter(el => !el.checked).map(el => {
      if (remaining.includes(el.value)) {
        const index = remaining.findIndex(n => n === el.value);
        remaining.splice(index, 1);
        result.minus = result.minus ? result.minus + 1 : 1;
      }
    });

    if (!result.minus && !result.plus) {
      result.missed = true;
    }

    const guess = {
      value: guessArray,
      round: guesses.length,
      result: result,
      passed: true
    };
    const newList = guesses.concat();
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

  const remainingRounds = rounds - guesses.length;
  const myMessage = !gameResult ? gameStarted ? `You have ${rounds === 0 ? 'unlimited' : rounds} rounds to guess my number. Start writing your guess and see the results ;)` : 'Set your preferences and start playing!' : `You have ${gameResult}!`;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, partyModeOn && __jsx(_PartyBackground__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "px-4 py-6 lg:px-20 md:py-12 shadow bg-white w-full sm-grid-sm md:w-grid-md lg:w-grid-lg xl:w-grid-xl mx-auto",
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
  }, `Ups! You have ${remainingRounds} rounds left.`), gameResult === 'won' && __jsx(_Confetti__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 37
    }
  }), __jsx(_SettingsTool__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx(_NumberSign__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    onChange: () => setPartyModeOn(prevMode => {
      return !prevMode;
    }),
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

/***/ }),

/***/ "./components/GuessRow.tsx":
/*!*********************************!*\
  !*** ./components/GuessRow.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuessRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/GuessRow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function GuessRow({
  guess,
  guessNumber
}) {
  const {
    digits
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_1__["GameContext"]);
  const {
    round,
    result,
    value,
    passed
  } = guess;
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  const inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  const handleUserKeyPress = event => {
    const {
      keyCode
    } = event;

    if (keyCode === 13 && !passed && inputValue.length === digits) {
      guessNumber(inputValue);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const handleChange = value => {
    value = value.replace(/\D/g, '');
    setInputValue(Array.from(value));
  };

  const handleClick = () => {
    if (inputValue.length !== digits) return false;
    guessNumber(inputValue);
  };

  const id = `guessInput${round}`;
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
    className: "nes-input focus:outline-none text-center py-1",
    disabled: passed,
    type: "tel",
    placeholder: `Round ${round}`,
    id: id,
    value: inputValue.join(' '),
    onChange: event => handleChange(event.target.value),
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
    className: "self-center nes-badge",
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
      columnNumber: 72
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
  }, `${result.plus} cuk!`)), result.minus && __jsx("div", {
    className: "self-center nes-badge",
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
      columnNumber: 71
    }
  }, `${result.minus} position wrong!`))));
}

/***/ }),

/***/ "./components/Logo.tsx":
/*!*****************************!*\
  !*** ./components/Logo.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/Logo.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Logo() {
  return __jsx("img", {
    className: "mx-auto w-auto h-32",
    src: "logo.png",
    alt: "guess my number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 13
    }
  });
}

/***/ }),

/***/ "./components/NumberSign.tsx":
/*!***********************************!*\
  !*** ./components/NumberSign.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberSign; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/NumberSign.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function NumberSign() {
  const {
    numberArray,
    gameResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_2__["GameContext"]);

  if (!numberArray) {
    return null;
  }

  const digitFrame = (digit, i) => __jsx("input", {
    key: i,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'is-error': gameResult === 'lost',
      'text-reddish': gameResult === 'won'
    }, 'nes-input text-center text-xl py-1'),
    disabled: true,
    value: digit.hidden ? '?' : digit.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  });

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

/***/ }),

/***/ "./components/PartyBackground.tsx":
/*!****************************************!*\
  !*** ./components/PartyBackground.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PartyBackground; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useUtils */ "./hooks/useUtils.ts");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/PartyBackground.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


const colors = ['#FF00CC', '#FF00CC', '#EE34D2', '#FF6EFF', '#50BFE6', '#AAF0D1', '#66FF66', '#CCFF00', '#FFFF66', '#FFFF66', '#FFCC33', '#FF9933', '#FF9966', '#FF6037', '#FD5B78', '#FF355E'];
const animation = ['shine2', 'shine1'];
function PartyBackground() {
  const {
    windowWidth,
    windowHeight,
    rnd
  } = Object(_hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const createBall = () => {
    const wh = rnd(1, 2);
    const ballCss = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
            z-index:-1;
            width: ${wh}rem;
            height: ${wh}rem;
            border-radius:50%;
            transition-duration:.45s;
            position:absolute;
            transition-duration:1.4s;
            transition-timing-function: cubic-bezier(.43,-0.28,.25,1.37);
            left: ${Math.random() * (windowWidth - 2)}px;
            top: ${Math.random() * (windowHeight - 2)}px;
            background:  ${colors[Math.floor(Math.random() * colors.length)]};
            opacity: ${Math.random()};
            animation: ${animation[rnd(0, 1)]} 2s infinite;
        `;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      key: Math.random(),
      className: "ball",
      css: ballCss,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    });
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, Array.from({
    length: 200
  }, item => createBall()));
}

/***/ }),

/***/ "./components/SettingsTool.tsx":
/*!*************************************!*\
  !*** ./components/SettingsTool.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsTool; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
/* harmony import */ var _hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useUtils */ "./hooks/useUtils.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/SettingsTool.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const availableDigits = [3, 4, 5, 6];
const availableRounds = [0, 6, 8, 10];
function SettingsTool() {
  const {
    digits,
    setDigits,
    startGame,
    rounds,
    setRounds,
    gameStarted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_1__["GameContext"]);
  const {
    scrollTop
  } = Object(_hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const digitChoices = __jsx("div", {
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
  }, "Digits:"), availableDigits.map(digit => __jsx("label", {
    key: digit,
    className: "md:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 39
    }
  }, __jsx("input", {
    type: "radio",
    className: "nes-radio",
    checked: digit === digits,
    onChange: event => {
      setDigits(parseInt(event.target.value));
    },
    value: digit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 78
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 283
    }
  }, `${digit} digits`))));

  const roundChoices = __jsx("div", {
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
  }, "Rounds:"), availableRounds.map(round => __jsx("label", {
    key: round,
    className: " md:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 39
    }
  }, __jsx("input", {
    type: "radio",
    className: "nes-radio",
    checked: round === rounds,
    onChange: event => {
      setRounds(parseInt(event.target.value));
    },
    value: round,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 79
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 283
    }
  }, round === 0 ? 'unlimited' : `${round} rounds`))));

  const handleClick = () => {
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
    className: "w-full flex flex-col md:flex-col",
    style: {
      opacity: 1,
      transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    },
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

/***/ }),

/***/ "./context/GameContext.tsx":
/*!*********************************!*\
  !*** ./context/GameContext.tsx ***!
  \*********************************/
/*! exports provided: GameContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameContext", function() { return GameContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/context/GameContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const createNumberArray = digits => {
  const numberArray = [];

  for (let i = 0; i < digits; i++) {
    numberArray.push({
      value: Math.floor(Math.random() * 10).toString(),
      hidden: true
    });
  }

  return numberArray;
};

const initialState = {
  player: 'single',
  digits: 4,
  rounds: 0,
  gameStarted: false,
  numberArray: null,
  gameResult: null
};

function reducer(state, action) {
  var _state$numberArray;

  switch (action.type) {
    case 'SET_PLAYER':
      return _objectSpread({}, state, {
        player: action.value
      });

    case 'SET_DIGITS':
      return _objectSpread({}, state, {
        digits: action.value
      });

    case 'SET_ROUNDS':
      return _objectSpread({}, state, {
        rounds: action.value
      });

    case 'START_GAME':
      return _objectSpread({}, state, {
        gameStarted: true,
        numberArray: createNumberArray(state.digits)
      });

    case 'END_GAME':
      return _objectSpread({}, state, {
        numberArray: (_state$numberArray = state.numberArray) === null || _state$numberArray === void 0 ? void 0 : _state$numberArray.map(el => {
          return _objectSpread({}, el, {
            hidden: false
          });
        }),
        gameResult: action.value ? 'won' : 'lost'
      });

    case 'RESET':
      return _objectSpread({}, initialState);

    default:
      return state;
  }
}

const GameContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
GameContext.displayName = 'GameContext';
/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, initialState);
  const value = {
    player: state.player,
    rounds: state.rounds,
    digits: state.digits,
    gameStarted: state.gameStarted,
    numberArray: state.numberArray,
    gameResult: state.gameResult,
    setPlayer: value => dispatch({
      type: 'SET_PLAYER',
      value: value
    }),
    setDigits: value => dispatch({
      type: 'SET_DIGITS',
      value: value
    }),
    setRounds: value => dispatch({
      type: 'SET_ROUNDS',
      value: value
    }),
    resetGame: () => dispatch({
      type: 'RESET'
    }),
    startGame: () => dispatch({
      type: 'START_GAME'
    }),
    endGame: value => dispatch({
      type: 'END_GAME',
      value: value
    })
  };
  return __jsx(GameContext.Provider, {
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, children);
});

/***/ }),

/***/ "./hooks/useUtils.ts":
/*!***************************!*\
  !*** ./hooks/useUtils.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUtils; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useUtils() {
  const {
    0: windowWidth,
    1: setWindowWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: windowHeight,
    1: setWindowHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (window) {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const rnd = (m, n) => Math.floor(Math.random() * (n - m + 1)) + m;

  return {
    windowWidth,
    windowHeight,
    scrollTop,
    rnd
  };
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GameBoard */ "./components/GameBoard.tsx");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.tsx");
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_context_GameContext__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "w-full px-4 py-8 md:p-12 xl:px-40 lg:py-20",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("h1", {
  className: "text-center mb-8 text-white text-2xl md:text-4xl",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, "Guess my number"), __jsx(_components_GameBoard__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}))));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map