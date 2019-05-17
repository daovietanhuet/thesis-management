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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "1yjX":
/***/ (function(module, exports) {



/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Page \xA9 - 2019 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Powered By ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/daovietanh99",
    target: "_blank"
  }, "\u0110\xE0o Vi\u1EC7t Anh")));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./pages/ContentForm.js + 5 modules
var ContentForm = __webpack_require__("fQr5");

// CONCATENATED MODULE: ./components/NavBar.js







var NavBar_NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(NavBar, _React$Component);

  function NavBar() {
    Object(classCallCheck["a" /* default */])(this, NavBar);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavBar).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(NavBar, [{
    key: "render",
    value: function render() {
      var onLogout = this.props.onLogout;
      return external_react_default.a.createElement("nav", {
        className: "navbar navbar-inverse"
      }, external_react_default.a.createElement("div", {
        className: "container-fluid"
      }, external_react_default.a.createElement("div", {
        className: "navbar-header"
      }, external_react_default.a.createElement("a", {
        className: "navbar-brand",
        href: "#"
      }, "Qu\u1EA3n l\xFD kh\xF3a lu\u1EADn")), external_react_default.a.createElement("ul", {
        className: "nav navbar-nav navbar-right"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, external_react_default.a.createElement("span", {
        className: "glyphicon glyphicon-user"
      }), " Vi\u1EC7t Anh")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: onLogout
      }, external_react_default.a.createElement("span", {
        className: "glyphicon glyphicon-log-in"
      }), " \u0110\u0103ng xu\u1EA5t")))));
    }
  }]);

  return NavBar;
}(external_react_default.a.Component);

/* harmony default export */ var components_NavBar = (NavBar_NavBar);
// EXTERNAL MODULE: ./assets/request.js
var request = __webpack_require__("ZX5V");
var request_default = /*#__PURE__*/__webpack_require__.n(request);

// EXTERNAL MODULE: ./assets/styles.css
var styles = __webpack_require__("1yjX");

// CONCATENATED MODULE: ./pages/index.js















var pages_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(App).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onLogout", function () {
      var cf = confirm("Bạn có chắc chắn muốn đăng xuất");

      if (cf) {
        _this.setState({
          loading_logout: true
        });

        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userId');
        router_default.a.push("/login");
      }
    });

    _this.state = {
      loading_logout: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var token = localStorage.getItem('token');
      var role = localStorage.getItem('userRole');
      var id = localStorage.getItem('userId');

      if (!token || !role || !id) {
        router_default.a.push("/login");
      } else {
        request_default()('/auth/verify', 'GET').then(function (result) {
          if (!(result && result.httpCode && result.httpCode === 200)) {
            _this2.onLogout();
          }
        }).catch(function (error) {
          _this2.onLogout();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "page"
      }), external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Thesis management"), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
        integrity: "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
        crossOrigin: "anonymous"
      }), external_react_default.a.createElement("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"
      }), external_react_default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
      })), external_react_default.a.createElement("div", {
        className: this.state.loading_logout ? 'login_loading' : 'disappear'
      }, " ", external_react_default.a.createElement("i", {
        className: "fa fa-spinner fa-spin"
      }), " "), external_react_default.a.createElement(components_NavBar, {
        onLogout: this.onLogout
      }), external_react_default.a.createElement(ContentForm["default"], null));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_App);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZX5V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("zrwo"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("O40h"));

module.exports =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(endpoint, method, queryString, header, body) {
    var token, config, result, jsonResult;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = window.localStorage.getItem('token');
            config = {
              method: method,
              headers: (0, _objectSpread2.default)({
                "Authorization": "Bearer ".concat(token)
              }, header),
              body: (0, _stringify.default)(body)
            };
            if (method === 'GET') delete config.body;
            _context.next = 5;
            return fetch("https://thesismanagement.herokuapp.com".concat(endpoint, "?").concat(queryString), config);

          case 5:
            result = _context.sent;
            _context.next = 8;
            return result.json();

          case 8:
            jsonResult = _context.sent;
            return _context.abrupt("return", jsonResult);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fQr5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./assets/request.js
var request = __webpack_require__("ZX5V");
var request_default = /*#__PURE__*/__webpack_require__.n(request);

// CONCATENATED MODULE: ./components/TableRow.js




var TableRow_TableRow = function TableRow(props) {
  var thesisSubject = props.thesisSubject,
      state = props.state,
      updated_at = props.updated_at,
      studentId = props.studentId,
      thesisCode = props.thesisCode,
      id = props.id;
  return external_react_default.a.createElement("tr", {
    "data-status": state,
    className: "fadein_ele"
  }, external_react_default.a.createElement("td", null, external_react_default.a.createElement("a", {
    href: "javascript:;"
  })), external_react_default.a.createElement("td", null, external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("img", {
    src: "_next/static/images/thesis_icon.png",
    className: "media-photo",
    "data-toggle": "modal",
    "data-target": "#myModal"
  }))), external_react_default.a.createElement("td", null, external_react_default.a.createElement("h4", {
    className: "title"
  }, external_react_default.a.createElement("a", {
    className: "name"
  }, "L\xEA Mai Ph\u01B0\u01A1ng"), " ", external_react_default.a.createElement("i", {
    className: "fas fa-link"
  }), " ", external_react_default.a.createElement("a", {
    className: "name"
  }, studentId ? '17020567' : '')), external_react_default.a.createElement("p", {
    className: "summary"
  }, " ", thesisSubject, " (", thesisCode, ") ")), external_react_default.a.createElement("td", null, external_react_default.a.createElement("span", {
    className: getClassStatus(state)
  }, "(", getStatus(state), ")")), external_react_default.a.createElement("td", null, external_react_default.a.createElement("span", {
    className: "media-meta"
  }, external_moment_default()(updated_at).format("DD/MM/YYYY"))), external_react_default.a.createElement("td", null, external_react_default.a.createElement("button", {
    "data-toggle": state === 'NEW' && localStorage.getItem('userRole') === 'STU' || state === 'WAITTING' ? '' : 'modal',
    "data-target": "#myModal",
    className: state === 'CANCELED' ? 'disappear' : 'btn btn-default btn-action-pos',
    onClick: function onClick(e) {
      return TableRow_doActivity(state, 'pos', id);
    },
    type: "button"
  }, getActivity(state, 'pos'))), external_react_default.a.createElement("td", null, external_react_default.a.createElement("button", {
    className: localStorage.getItem('userRole') === 'STU' || state === 'CANCELED' ? 'disappear' : 'btn btn-default btn-action-neg',
    onClick: function onClick(e) {
      return TableRow_doActivity(state, 'neg', id);
    },
    type: "button"
  }, getActivity(state, 'neg'))));
};

var getStatus = function getStatus(status) {
  switch (status) {
    case 'NEW':
      return 'Mới';

    case 'WAITTING':
      return 'Đang chờ';

    case 'CANCELED':
      return 'Bị hủy';

    case 'ACTIVE':
      return 'Hoạt động';
  }
};

var getClassStatus = function getClassStatus(status) {
  switch (status) {
    case 'NEW':
      return 'new';

    case 'WAITTING':
      return 'waitting';

    case 'CANCELED':
      return 'canceled';

    case 'ACTIVE':
      return 'active';
  }
};

var getActivity = function getActivity(status, type) {
  var userRole = localStorage.getItem('userRole');
  var isStudent = userRole === 'STU';

  switch (type) {
    case 'pos':
      switch (status) {
        case 'NEW':
          return isStudent ? 'Đăng ký' : "Sửa";

        case 'WAITTING':
          return isStudent ? 'Hủy' : "Chấp nhận";

        case 'ACTIVE':
          return isStudent ? 'Sửa' : "Chấm điểm";
      }

    case 'neg':
      switch (status) {
        case 'NEW':
          return 'Xóa';

        case 'WAITTING':
          return 'Từ chối';

        case 'ACTIVE':
          return 'Hoãn';
      }

  }
};

var TableRow_doActivity = function doActivity(status, type, thesisId) {
  var userRole = localStorage.getItem('userRole');
  var isStudent = userRole === 'STU';
  var config = null;

  switch (type) {
    case 'pos':
      switch (status) {
        case 'NEW':
          config = isStudent ? {
            endpoint: '/student/thesis/join/',
            methods: 'POST'
          } : null;
          break;

        case 'WAITTING':
          config = isStudent ? {
            endpoint: '/student/thesis/exit/',
            methods: 'POST'
          } : {
            endpoint: '/lecturer/thesis/accept/',
            methods: 'POST'
          };
          break;

        default:
          config = null;
      }

      ;
      break;

    case 'neg':
      switch (status) {
        case 'NEW':
          config = {
            endpoint: '/lecturer/thesis/delete/',
            methods: 'DELETE'
          };
          break;

        case 'WAITTING':
          config = {
            endpoint: '/lecturer/thesis/reject/',
            methods: "POST"
          };
          break;

        case 'ACTIVE':
          config = {
            endpoint: '/lecturer/thesis/cancel/',
            methods: "POST"
          };
          break;

        default:
          config = null;
      }

      ;
      break;
  }

  var cf = false;
  if (!config) return 0;else cf = confirm("Bạn có chắc chắn thực hiện hành động này không. Hành động này có thể ảnh hưởng lớn đến kết quả sau này");
  if (cf) request_default()(config.endpoint + thesisId, config.methods).then(function (result) {
    if (result && result.httpCode && result.httpCode === 200) {
      console.log("ok");
    }
  });
};

/* harmony default export */ var components_TableRow = (TableRow_TableRow);
// CONCATENATED MODULE: ./components/Table.js














var Table_Table =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Table, _React$Component);

  function Table(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Table);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Table).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "componentDidMount",
    /*#__PURE__*/
    Object(asyncToGenerator["default"])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var res;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return request_default()('/thesis/info');

            case 2:
              res = _context.sent;

              _this.setState({
                listThesis: res.result,
                loading: false
              });

              _this.getOwnThesis();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "render", function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          filter = _this$props.filter,
          search = _this$props.search,
          own = _this$props.own;
      return external_react_default.a.createElement("div", {
        className: "table-container"
      }, external_react_default.a.createElement("table", {
        className: "table table-filter"
      }, external_react_default.a.createElement("thead", {
        className: "theadTitle"
      }, external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", {
        colSpan: 3
      }, "Kh\xF3a lu\u1EADn"), external_react_default.a.createElement("td", null, "#"), external_react_default.a.createElement("td", {
        style: {
          textAlign: "left"
        }
      }, "Ng\xE0y c\u1EADp nh\u1EADt"), external_react_default.a.createElement("td", {
        colSpan: 2
      }, "H\xE0nh \u0111\u1ED9ng"))), external_react_default.a.createElement("tbody", null, !_this.state.loading ? _this.renderListThesis(search, filter, own) : _this.renderLoading())));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderListThesis", function (search, filter, own) {
      var check = false;
      var list = _this.state.listThesis;
      if (own) list = _this.state.ownThesisInfo;
      var result = list.map(function (ele, index) {
        if ((ele.state === filter || filter === 'ALL') && (ele.thesisSubject + "(".concat(ele.thesisCode, ")")).includes(search)) return external_react_default.a.createElement(components_TableRow, _extends({}, ele, {
          key: index
        }));
      });
      if (localStorage.getItem('userRole') === 'LEC' && own) result.push(external_react_default.a.createElement("tr", {
        key: result.length
      }, external_react_default.a.createElement("td", {
        colSpan: "7",
        style: {
          verticalAlign: "center",
          textAlign: "center",
          fontSize: "2rem",
          color: "#ddd"
        },
        className: "fadein_ele"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("i", {
        className: "fas fa-plus"
      }), " Th\xEAm kh\xF3a lu\u1EADn "))));

      for (var i = 0; i < result.length; i++) {
        if (result[i]) check = true;
      }

      if (!check) return external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", {
        colSpan: "7",
        style: {
          verticalAlign: "center",
          textAlign: "center",
          fontSize: "3rem",
          color: "#ddd"
        },
        className: "fadein_ele"
      }, external_react_default.a.createElement("i", {
        className: "fas fa-database"
      }), " NO DATA"));else return result;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderLoading", function () {
      return external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", {
        colSpan: "7",
        style: {
          verticalAlign: "center",
          textAlign: "center"
        },
        className: "fadein_ele"
      }, external_react_default.a.createElement("i", {
        className: "fa fa-spinner fa-spin"
      }), " Loading..."));
    });

    _this.state = {
      listThesis: [],
      ownThesisInfo: [],
      loading: true
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Table, [{
    key: "getOwnThesis",
    value: function getOwnThesis() {
      var _this2 = this;

      request_default()('/thesis/info', 'GET', 'section=self').then(function (result) {
        if (!result.result || !result.result[0] || result.result === [] || !result.httpCode === 200) _this2.setState({
          ownThesisInfo: []
        });else _this2.setState({
          ownThesisInfo: result.result
        });
      });
    }
  }]);

  return Table;
}(external_react_default.a.Component);

/* harmony default export */ var components_Table = (Table_Table);
// CONCATENATED MODULE: ./components/FilterTable.js


var FilterTable_FilterTable = function FilterTable(props) {
  var _onChange = props.onChange,
      own = props.own;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
    className: "form-control",
    type: "text",
    placeholder: "T\xECm ki\u1EBFm theo t\xEAn, m\xE3, gi\u1EA3ng vi\xEAn",
    "aria-label": "Search",
    onChange: function onChange(e) {
      return _onChange({
        search: e.target.value.trim()
      });
    }
  }), external_react_default.a.createElement("div", {
    className: "btn-group"
  }, external_react_default.a.createElement("button", {
    type: "button",
    className: own ? "btn btn-primary btn-filter" : "btn btn-default btn-filter",
    onClick: function onClick(e) {
      return _onChange({
        own: !own,
        filter: 'ALL'
      });
    }
  }, "C\u1EE7a t\xF4i")), external_react_default.a.createElement("div", {
    className: "btn-group"
  }, external_react_default.a.createElement("button", {
    type: "button",
    className: "btn btn-default btn-filter",
    onClick: function onClick(e) {
      return _onChange({
        filter: 'ALL'
      });
    }
  }, "T\xE2t c\u1EA3"), external_react_default.a.createElement("button", {
    type: "button",
    className: "btn btn-success btn-filter",
    onClick: function onClick(e) {
      return _onChange({
        filter: 'NEW'
      });
    }
  }, "M\u1EDBi"), external_react_default.a.createElement("button", {
    type: "button",
    className: "btn btn-warning btn-filter",
    onClick: function onClick(e) {
      return _onChange({
        filter: 'WAITTING'
      });
    }
  }, "\u0110ang ch\u1EDD"), external_react_default.a.createElement("button", {
    type: "button",
    className: "btn btn-danger btn-filter",
    onClick: function onClick(e) {
      return _onChange({
        filter: 'CANCELED'
      });
    }
  }, "H\u1EE7y"), external_react_default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary btn-filter",
    onClick: function onClick(e) {
      return _onChange({
        filter: 'ACTIVE'
      });
    }
  }, "Ho\u1EA1t \u0111\u1ED9ng")));
};

/* harmony default export */ var components_FilterTable = (FilterTable_FilterTable);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__("8lYe");

// CONCATENATED MODULE: ./components/Modal.js







var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Modal, _React$Component);

  function Modal() {
    Object(classCallCheck["a" /* default */])(this, Modal);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Modal).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Modal, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        id: "myModal",
        className: "modal fade",
        role: "dialog"
      }, external_react_default.a.createElement("div", {
        className: "modal-dialog"
      }, external_react_default.a.createElement("div", {
        className: "modal-content"
      }, external_react_default.a.createElement("div", {
        className: "modal-header"
      }, external_react_default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal"
      }, "\xD7"), external_react_default.a.createElement("h4", {
        className: "modal-title"
      }, "Modal Header")), external_react_default.a.createElement("div", {
        className: "modal-body"
      }, external_react_default.a.createElement("p", null, "Some text in the modal.")), external_react_default.a.createElement("div", {
        className: "modal-footer"
      }, external_react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-default",
        "data-dismiss": "modal"
      }, "Close")))));
    }
  }]);

  return Modal;
}(external_react_default.a.Component);

/* harmony default export */ var components_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./pages/ContentForm.js














var ContentForm_ContentForm =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(ContentForm, _React$Component);

  function ContentForm(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ContentForm);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ContentForm).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetState", function (changedState) {
      _this.setState(changedState);
    });

    _this.state = {
      own: false,
      filter: "ALL",
      search: ""
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ContentForm, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("section", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "panel panel-default"
      }, external_react_default.a.createElement("div", {
        className: "panel-body"
      }, external_react_default.a.createElement(components_FilterTable, _extends({}, this.state, {
        onChange: this.onSetState
      })), external_react_default.a.createElement(components_Table, this.state))), external_react_default.a.createElement(Footer["a" /* default */], null)), external_react_default.a.createElement(components_Modal, null)));
    }
  }]);

  return ContentForm;
}(external_react_default.a.Component);

/* harmony default export */ var pages_ContentForm = __webpack_exports__["default"] = (ContentForm_ContentForm);

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });