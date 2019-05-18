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
/* harmony import */ var _assets_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/request */ "./assets/request.js");
/* harmony import */ var _assets_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_request__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\daovi\\OneDrive\\Desktop\\thesis-management\\components\\TableRow.js";




var TableRow = function TableRow(props) {
  var thesisSubject = props.thesisSubject,
      state = props.state,
      updated_at = props.updated_at,
      studentId = props.studentId,
      thesisCode = props.thesisCode,
      id = props.id,
      thesisMark = props.thesisMark,
      lecturerName = props.lecturerName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    "data-status": state,
    className: "fadein_ele",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:;",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "_next/static/images/thesis_icon.png",
    className: "media-photo",
    "data-toggle": "modal",
    "data-target": "#myModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, lecturerName ? lecturerName : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-spinner fa-spin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), " "), " ", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), " ", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  },  true ? studentId : undefined), " ", " ", localStorage.getItem('userRole') !== 'STU' ? thesisMark ? "(".concat(thesisMark, ")") : '(chưa có điểm)' : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, " ", thesisSubject, " (", thesisCode, ") ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: getClassStatus(state),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "(", getStatus(state), ")")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "media-meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(updated_at).format("DD/MM/YYYY"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "data-toggle": state === 'NEW' && localStorage.getItem('userRole') === 'STU' || state === 'WAITTING' ? '' : 'modal',
    "data-target": "#myModal",
    className: state === 'CANCELED' ? 'disappear' : 'btn btn-default btn-action-pos',
    onClick: function onClick(e) {
      return doActivity(state, 'pos', id);
    },
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, getActivity(state, 'pos'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: localStorage.getItem('userRole') === 'STU' || state === 'CANCELED' ? 'disappear' : 'btn btn-default btn-action-neg',
    onClick: function onClick(e) {
      return doActivity(state, 'neg', id);
    },
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
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

var doActivity = function doActivity(status, type, thesisId) {
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
  if (cf) _assets_request__WEBPACK_IMPORTED_MODULE_2___default()(config.endpoint + thesisId, config.methods).then(function (result) {
    if (result && result.httpCode && result.httpCode === 200) {
      console.log("ok");
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TableRow);

/***/ })

})
//# sourceMappingURL=index.js.9e8e2ec75d552f697097.hot-update.js.map