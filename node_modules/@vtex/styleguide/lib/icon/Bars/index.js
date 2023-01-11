"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var iconBase = {
  width: 18,
  height: 12
};

var Bars =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Bars, _PureComponent);

  function Bars() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Bars.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('bars') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 18 12",
      fill: color,
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z",
      fill: color
    }));
  };

  return Bars;
}(_react.PureComponent);

Bars.defaultProps = {
  color: 'currentColor',
  size: 20,
  block: false
};
Bars.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Bars;