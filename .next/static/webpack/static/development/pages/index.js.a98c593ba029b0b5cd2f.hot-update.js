webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableRow */ "./components/TableRow.js");
/* harmony import */ var _assets_request__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/request */ "./assets/request.js");
/* harmony import */ var _assets_request__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_request__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "C:\\Users\\daovi\\OneDrive\\Desktop\\thesis-management\\components\\Table.js";




var Table =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Table, _React$Component);

  function Table(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Table);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Table).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentDidMount",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _assets_request__WEBPACK_IMPORTED_MODULE_11___default()('/thesis/info');

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "render", function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          filter = _this$props.filter,
          search = _this$props.search,
          own = _this$props.own;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "table-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        className: "table table-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("thead", {
        className: "theadTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        colSpan: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Kh\xF3a lu\u1EADn"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "#"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Ng\xE0y c\u1EADp nh\u1EADt"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        colSpan: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "H\xE0nh \u0111\u1ED9ng"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, !_this.state.loading ? _this.renderListThesis(search, filter, own) : _this.renderLoading())));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getOwnThesis", function () {
      _assets_request__WEBPACK_IMPORTED_MODULE_11___default()('/thesis/info', 'GET', 'section=self').then(
      /*#__PURE__*/
      function () {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(result) {
          var list, i, lecturer;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!result.result || !result.result[0] || result.result === [] || !result.httpCode === 200)) {
                    _context2.next = 4;
                    break;
                  }

                  _this.setState({
                    ownThesisInfo: []
                  });

                  _context2.next = 15;
                  break;

                case 4:
                  list = result.result;
                  i = 0;

                case 6:
                  if (!(i < list.length)) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.next = 9;
                  return _assets_request__WEBPACK_IMPORTED_MODULE_11___default()('/lecturer/info', 'GET', "section=all&id=".concat(list[i].lecturerId));

                case 9:
                  lecturer = _context2.sent;
                  list[i].lecturerName = lecturer[0] ? lecturer[0].fullName : '';

                case 11:
                  i++;
                  _context2.next = 6;
                  break;

                case 14:
                  _this.setState({
                    ownThesisInfo: list
                  });

                case 15:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderListThesis", function (search, filter, own) {
      var check = false;
      var list = _this.state.listThesis;
      if (own) list = _this.state.ownThesisInfo;
      var result = list.map(function (ele, index) {
        if ((ele.state === filter || filter === 'ALL') && (ele.thesisSubject + "(".concat(ele.thesisCode, ")")).includes(search)) return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ele, {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }));
      });
      if (localStorage.getItem('userRole') === 'LEC' && own) result.push(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        key: result.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        colSpan: "7",
        style: {
          verticalAlign: "center",
          textAlign: "center",
          fontSize: "2rem",
          color: "#ddd"
        },
        className: "fadein_ele",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), " Th\xEAm kh\xF3a lu\u1EADn "))));

      for (var i = 0; i < result.length; i++) {
        if (result[i]) check = true;
      }

      if (!check) return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        colSpan: "7",
        style: {
          verticalAlign: "center",
          textAlign: "center",
          fontSize: "3rem",
          color: "#ddd"
        },
        className: "fadein_ele",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-database",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), " NO DATA"));else return result;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderLoading", function () {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        colSpan: "7",
        style: {
          verticalAlign: "center",
          textAlign: "center"
        },
        className: "fadein_ele",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fa fa-spinner fa-spin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), " Loading..."));
    });

    _this.state = {
      listThesis: [],
      ownThesisInfo: [],
      loading: true
    };
    return _this;
  }

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

})
//# sourceMappingURL=index.js.a98c593ba029b0b5cd2f.hot-update.js.map