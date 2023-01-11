"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TotalizerLabel = function TotalizerLabel(_ref) {
  var label = _ref.label;
  return _react2.default.createElement("div", {
    className: "c-muted-2 f6 mb2"
  }, label);
};

TotalizerLabel.propTypes = {
  label: _propTypes2.default.string.isRequired
};
exports.default = TotalizerLabel;