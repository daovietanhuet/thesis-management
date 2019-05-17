webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ContentForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContentForm */ "./pages/ContentForm.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _assets_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/request */ "./assets/request.js");
/* harmony import */ var _assets_request__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_request__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/styles.css */ "./assets/styles.css");
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_css__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\daovi\\Desktop\\thesis-management\\pages\\index.js";








var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onLogout", function () {
      var cf = confirm("Bạn có chắc chắn muốn đăng xuất");

      if (cf) {
        _this.setState({
          loading_logout: true
        });

        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userId');
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/login");
      }
    });

    _this.state = {
      loading_logout: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var token = localStorage.getItem('token');
      var role = localStorage.getItem('userRole');
      var id = localStorage.getItem('userId');

      if (!token || !role || !id) {
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/login");
      } else {
        _assets_request__WEBPACK_IMPORTED_MODULE_12___default()('/auth/verify', 'GET').then(function (result) {
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Thesis management"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
        integrity: "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.loading_logout ? 'login_loading' : 'disappear',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-spinner fa-spin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onLogout: this.onLogout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ContentForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.42abc9f5e3a8f66f4a02.hot-update.js.map