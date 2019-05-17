webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/LoginForm.js":
/*!****************************!*\
  !*** ./pages/LoginForm.js ***!
  \****************************/
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
/* harmony import */ var _assets_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/request */ "./assets/request.js");
/* harmony import */ var _assets_request__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_request__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\daovi\\Desktop\\thesis-management\\pages\\LoginForm.js";



var LoginForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginForm, _React$Component);

  function LoginForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", function () {
      _assets_request__WEBPACK_IMPORTED_MODULE_8___default()('/auth/login', 'POST', '', {
        "Content-type": "application/json"
      }, {
        username: _this.state.username,
        password: _this.state.password,
        userRole: _this.state.role
      }).then(function (result) {
        if (result && result.httpCode && result.httpCode === 200) {
          localStorage.setItem('token', result.result.token);
          localStorage.setItem('userRole', _this.role);
          _assets_request__WEBPACK_IMPORTED_MODULE_8___default()('/auth/verify', 'GET').then(function (result) {
            if (result && result.httpCode && result.httpCode === 200) {
              localStorage.setItem('userId', result.result.userId);

              _this.props.onSuccess();
            }
          });
        }
      });
    });

    _this.state = {
      username: "",
      password: "",
      role: "STU"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-signin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "form-signin-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Vui l\xF2ng \u0111\u0103ng nh\u1EADp"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        className: "input_user form-control",
        name: "username",
        placeholder: "T\xEAn \u0111\u0103ng nh\u1EADp",
        required: "",
        autoFocus: "",
        onChange: function onChange(e) {
          return _this2.setState({
            username: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "password",
        className: "input_pass form-control",
        name: "password",
        placeholder: "M\u1EADt kh\u1EA9u",
        required: "",
        onChange: function onChange(e) {
          return _this2.setState({
            password: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        className: "select form-control",
        name: "role",
        defaultValue: true,
        onChange: function onChange(e) {
          return _this2.setState({
            role: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "STU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Sinh vi\xEAn"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "LEC",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "G\u1EC9ang vi\xEAn"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "MAN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Qu\u1EA3n l\xFD")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-lg btn-primary btn-block",
        type: "submit",
        onClick: function onClick(e) {
          return _this2.onSubmit();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "\u0110\u0103ng nh\u1EADp")));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ })

})
//# sourceMappingURL=login.js.589ca1281290c58854bd.hot-update.js.map