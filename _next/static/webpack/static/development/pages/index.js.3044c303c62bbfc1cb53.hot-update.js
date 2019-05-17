webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/TableRow.js":
/*!********************************!*\
  !*** ./components/TableRow.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\daovi\\Desktop\\thesis-management\\components\\TableRow.js";



var TableRow = function TableRow(props) {
  var thesisSubject = props.thesisSubject,
      state = props.state,
      updated_at = props.updated_at,
      studentId = props.studentId;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    "data-status": state,
    className: "fadein_ele",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:;",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "_next/static/images/thesis_icon.png",
    className: "media-photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "L\xEA Mai Ph\u01B0\u01A1ng"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, studentId ? '17020567' : '')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, " ", thesisSubject, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: getClassStatus(state),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "(", getStatus(state), ")")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "media-meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(updated_at).format("DD/MM/YYYY"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "data-toggle": "modal",
    "data-target": "#myModal",
    className: state === 'CANCELED' ? 'disappear' : 'btn btn-default btn-action-pos',
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, getActivity(state, 'pos'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: localStorage.getItem('userRole') === 'STU' || state === 'CANCELED' ? 'disappear' : 'btn btn-default btn-action-neg',
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
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

var doActivity = function doActivity(status, type) {
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

/* harmony default export */ __webpack_exports__["default"] = (TableRow);

/***/ })

})
//# sourceMappingURL=index.js.3044c303c62bbfc1cb53.hot-update.js.map