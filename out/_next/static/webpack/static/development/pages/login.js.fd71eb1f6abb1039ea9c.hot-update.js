webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./assets/request.js":
/*!***************************!*\
  !*** ./assets/request.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

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
            console.log(body);
            token = window.localStorage.getItem('token');
            config = {
              method: method,
              headers: (0, _objectSpread2.default)({
                "Authorization": "Bearer ".concat(token)
              }, header),
              body: (0, _stringify.default)(body)
            };
            if (method === 'GET') delete config.body;
            _context.next = 6;
            return fetch("https://thesismanagement.herokuapp.com".concat(endpoint, "?").concat(queryString), config);

          case 6:
            result = _context.sent;
            _context.next = 9;
            return result.json();

          case 9:
            jsonResult = _context.sent;
            return _context.abrupt("return", jsonResult);

          case 11:
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

/***/ })

})
//# sourceMappingURL=login.js.fd71eb1f6abb1039ea9c.hot-update.js.map