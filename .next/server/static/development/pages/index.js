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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/Confetti.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


let containerWidth;
function Confetti() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    containerWidth = document.getElementsByClassName('nes-container')[0].clientWidth - 50;
  }, []);

  const confetti = i => {
    return __jsx("span", {
      key: i,
      className: `particle c${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["rnd"])(1, 4)}`,
      style: {
        top: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["rnd"])(10, 50),
        left: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["rnd"])(0, containerWidth),
        width: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["rnd"])(6, 8) + 'px',
        height: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["rnd"])(3, 4) + 'px',
        animationDelay: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["rnd"])(0, 30) / 10 + 's'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 16
      }
    });
  };

  if (true) return null;
  return __jsx("div", {
    className: "confetti relative h-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, Array.from({
    length: window.innerWidth / 50 * 10
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");
/* harmony import */ var _GuessRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GuessRow */ "./components/GuessRow.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var _SettingsTool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SettingsTool */ "./components/SettingsTool.tsx");
/* harmony import */ var _NumberSign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NumberSign */ "./components/NumberSign.tsx");
/* harmony import */ var _PartyBackground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PartyBackground */ "./components/PartyBackground.tsx");
/* harmony import */ var _Confetti__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Confetti */ "./components/Confetti.tsx");
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_2__["GameContext"]);
  const {
    0: guesses,
    1: setGuesses
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([_objectSpread({}, defaultGuess)]);
  const {
    0: partyModeOn,
    1: setPartyModeOn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const returnGuessRow = guess => __jsx(_GuessRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: guess.round,
    guess: guess,
    guessNumber: guessNumber,
    currentRound: guesses.length,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 44
    }
  });

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //reset the game
    setGuesses([_objectSpread({}, defaultGuess)]);
  }, [gameStarted]);

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
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["scrollTop"])();
    } else {
      if (!rounds || guesses.length < rounds) {
        newList.push(_objectSpread({}, defaultGuess, {
          round: guesses.length + 1
        }));
      }
    }

    setGuesses(newList);
  };

  const myMessage = !gameResult ? gameStarted ? `You have ${rounds === 0 ? 'unlimited' : rounds} rounds to guess my number. Start writing your guess and see the results ;)` : 'Set your preferences and start playing!' : `You have ${gameResult}!`;

  const returnInstructions = () => {
    if (!gameStarted || !!gameResult) return;
    return __jsx("div", {
      className: "text-xs lg:text-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "self-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, "When you have "), __jsx("div", {
      className: "flex flex-col lg:flex-row pl-2 lg:pl-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "self-center lg:mr-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, "a match: "), __jsx("div", {
      className: "self-center nes-badge plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "is-success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 57
      }
    }, "cuk!"))), __jsx("div", {
      className: "flex flex-col lg:flex-row  pl-2 lg:pl-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "self-center lg:mr-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, "a wrong placed: "), __jsx("div", {
      className: "self-center nes-badge wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "is-warning",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 57
      }
    }, "position wrong!"))), __jsx("div", {
      className: "flex flex-col lg:flex-row  pl-2 lg:pl-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "self-center lg:mr-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, "no match: "), __jsx("div", {
      className: "self-center nes-badge wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "is-error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 57
      }
    }, "Ups! you missed it!"))));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'hidden': !partyModeOn
    }, 'w-full h-full top-0 left-0'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_PartyBackground__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 85
    }
  })), __jsx("div", {
    className: "px-4 py-6 lg:px-20 md:py-8 shadow bg-white w-full sm-grid-sm md:w-grid-md lg:w-grid-lg xl:w-grid-xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "nes-container custom-padding with-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, "A Cool's Game"), __jsx("div", {
    className: " ml-12 md:ml-20 mt-12 md:mt-8 flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "nes-balloon from-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "text-sm md:text-base",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, myMessage), returnInstructions())), __jsx("i", {
    className: "-mt-8 nes-octocat animate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), gameResult === 'won' && __jsx(_Confetti__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 37
    }
  }), __jsx(_SettingsTool__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }), __jsx(_NumberSign__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }), gameStarted && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, guesses.map(returnGuessRow), __jsx("div", {
    className: "pt-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: resetGame,
    label: "Reset game",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 40
    }
  }))))), __jsx("label", {
    className: "w-full text-right mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 140,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/GuessRow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function GuessRow({
  guess,
  guessNumber,
  currentRound
}) {
  const {
    digits,
    giveHint,
    hintsGiven
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GameContext__WEBPACK_IMPORTED_MODULE_2__["GameContext"]);
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
  const {
    0: hintGiven,
    1: setHintGiven
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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

  const onHintClick = () => {
    setHintGiven(true);
    giveHint();
  };

  const onFocus = () => {
    if (inputValue.length === 0 && hintGiven) {
      setInputValue([...hintsGiven]);
    }
  };

  const placeholder = Array.from({
    length: digits
  }, (item, i) => hintsGiven[i] || 'X').join(' ');
  const id = `guessInput${round}`;
  const showHint = !passed && !hintGiven && currentRound > 2 && hintsGiven.length < digits - 1;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
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
    onChange: event => handleChange(event.target.value),
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
    className: "nes-balloon hint from-right text-xs bottom-0 right-0 flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "self-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "Do you need a hint?"), __jsx("img", {
    src: "hint.png",
    className: " w-auto h-8 md:h-10  md:ml-2 self-center animateOpacity",
    style: {
      imageRendering: 'pixelated'
    },
    onClick: onHintClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }))), passed && __jsx("div", {
    className: "text-left flex flex-col sm:flex-row mt-2 lg:mt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, result.missed && __jsx("div", {
    className: "self-center nes-badge wide custom-font-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "is-error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 94
    }
  }, "Ups! you missed it!")), result.plus && __jsx("div", {
    className: "self-center nes-badge plus custom-font-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 31
    }
  }, __jsx("span", {
    className: "is-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 92
    }
  }, `${result.plus} cuk!`)), result.minus && __jsx("div", {
    className: "self-center nes-badge wide custom-font-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 32
    }
  }, __jsx("span", {
    className: "is-warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 93
    }
  }, `${result.minus} position wrong!`))));
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
    }, 'nes-input text-center text-xl custom-padding'),
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "lodash/debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/components/PartyBackground.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const colors = ['#e76e55', '#FF00CC', '#EE34D2', '#FF6EFF', '#50BFE6', '#AAF0D1', '#66FF66', '#CCFF00', '#FFFF66', '#FFFF66', '#FFCC33', '#FF9933', '#FF9966', '#FF6037', '#FD5B78', '#FF355E'];
const animation = ['shine2', 'shine1', 'shine3'];

const createBall = windowValues => {
  const w = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["rnd"])(0.5, 1);
  const h = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["rnd"])(0.5, 1);
  const color = colors[Math.floor(Math.random() * colors.length)];
  const spanCss = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
    color: ${color};
    background-color: ${color};
    box-shadow: 0 0.5em ${color}, 0 -0.5em ${color}, 0.5em 0 ${color}, -0.5em 0 ${color};`;
  const containerCss = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
        left: ${Math.random() * (window.innerWidth - 2)}px;
        top: ${Math.random() * (window.innerHeight - 2)}px;`;
  const ballCss = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
        height: ${h}em;
        transition-duration:.45s;
        display:inline-block;
        transition-duration:1.4s;
        transition-timing-function: cubic-bezier(.43,-0.28,.25,1.37);
        font-size: ${Object(_utils__WEBPACK_IMPORTED_MODULE_2__["rnd"])(6, 10)}px;
        background:  ${color};
        opacity: ${Math.random()};
        animation: ${animation[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["rnd"])(0, 2)]} 1s infinite;
    `;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    key: Math.random(),
    className: "absolute",
    css: containerCss,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: ballCss,
    className: "ball",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 78
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    css: spanCss,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 114
    }
  }, "1")));
};

function PartyBackground() {
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => false ? undefined : {
    w: 0,
    h: 0
  });
  const balls = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (false) {} else {
      return [];
    }
  }, [windowSize]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (true) return;
    const handleResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(() => {
      if (window.innerHeight > windowSize.h || window.innerWidth > windowSize.w) setWindowSize({
        w: window.innerWidth,
        h: window.innerHeight
      });
    }, 100);
    window.addEventListener('resize', handleResize);
    return () => {
      handleResize.cancel();
      window.removeEventListener('resize', handleResize);
    };
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "fixed top-0 left-0 z-1-",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, balls);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");
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

  const digitChoices = __jsx("div", {
    className: "my-4 w-full sm:w-1/2 md:w-full flex flex-col md:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "mr-2 md:mr-4 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Digits:"), availableDigits.map(digit => __jsx("label", {
    key: digit,
    className: "md:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 39
    }
  }, __jsx("input", {
    type: "radio",
    className: "nes-radio pink",
    checked: digit === digits,
    onChange: event => {
      setDigits(parseInt(event.target.value));
    },
    value: digit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 78
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 288
    }
  }, `${digit} digits`))));

  const roundChoices = __jsx("div", {
    className: "my-4 w-full sm:w-1/2 md:w-full flex flex-col md:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "mr-2 md:mr-4 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Rounds:"), availableRounds.map(round => __jsx("label", {
    key: round,
    className: " md:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 39
    }
  }, __jsx("input", {
    type: "radio",
    className: "nes-radio pink",
    checked: round === rounds,
    onChange: event => {
      setRounds(parseInt(event.target.value));
    },
    value: round,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 79
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 288
    }
  }, round === 0 ? 'unlimited' : `${round} rounds`))));

  const handleClick = () => {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["scrollTop"])();
    startGame();
  };

  return __jsx("div", {
    className: "mt-4 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 12
    }
  }, !gameStarted && __jsx("div", {
    className: "w-full flex flex-col md:flex-col transition",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 16
    }
  }, digitChoices, roundChoices), !gameStarted && __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClick,
    label: "Start game",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
  hintsGiven: [],
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

    case 'GIVE_HINT':
      let given = null;
      const newArray = state.numberArray.map(number => {
        if (!given && number.hidden) {
          number.hidden = false;
          given = number.value;
        }

        return number;
      });
      return _objectSpread({}, state, {
        numberArray: newArray,
        hintsGiven: [...state.hintsGiven, given]
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
    hintsGiven: state.hintsGiven,
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
    giveHint: () => dispatch({
      type: 'GIVE_HINT'
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
      lineNumber: 142,
      columnNumber: 5
    }
  }, children);
});

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
/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GameContext */ "./context/GameContext.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/slnsrn/Documents/Projects/MyGames/GuessNumber/guess-my-number/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_context_GameContext__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, "Guess my number"), __jsx("meta", {
  property: "og:title",
  content: "Guess my number",
  key: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:description",
  content: "A Cool's game",
  key: "description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Press+Start+2P",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: "press.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
})), __jsx("div", {
  className: "w-full px-4 py-8 md:p-12 xl:px-40 lg:py-12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx("h1", {
  className: "text-center mb-6 text-white text-2xl md:text-4xl",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, "Guess my number"), __jsx(_components_GameBoard__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}))));

/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/*! exports provided: scrollTop, rnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rnd", function() { return rnd; });
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
const rnd = (m, n) => Math.floor(Math.random() * (n - m + 1)) + m;

/***/ }),

/***/ 3:
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

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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