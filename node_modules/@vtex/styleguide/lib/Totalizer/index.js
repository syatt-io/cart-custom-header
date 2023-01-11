"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TotalizerLabel = require("./TotalizerLabel");

var _TotalizerLabel2 = _interopRequireDefault(_TotalizerLabel);

var _TotalizerValue = require("./TotalizerValue");

var _TotalizerValue2 = _interopRequireDefault(_TotalizerValue);

var _TotalizerIcon = require("./TotalizerIcon");

var _TotalizerIcon2 = _interopRequireDefault(_TotalizerIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var BORDER_COLOR = 'b--muted-4';
var TOTALIZERS_CLASSES = "w-100 flex flex-column flex-row-ns ba br3 mb5 " + BORDER_COLOR;
var TOTALIZER_CLASSES = "flex flex-column flex-auto pa4 " + BORDER_COLOR;

var Totalizer =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Totalizer, _PureComponent);

  function Totalizer() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Totalizer.prototype;

  _proto.render = function render() {
    var items = this.props.items;

    if (items.length === 0) {
      return null;
    }

    return _react2.default.createElement("div", {
      className: TOTALIZERS_CLASSES
    }, items.map(function (item, i) {
      var IS_NOT_LAST = items.length > 1 && i < items.length - 1;
      var EXTRA_BORDER = IS_NOT_LAST ? 'bb bb-0-ns br-ns' : '';
      return _react2.default.createElement("div", {
        className: TOTALIZER_CLASSES + " " + EXTRA_BORDER,
        key: item.label
      }, item.icon ? _react2.default.createElement("div", {
        className: "flex flex-row"
      }, _react2.default.createElement(_TotalizerIcon2.default, {
        item: item
      }), _react2.default.createElement("div", null, _react2.default.createElement(_TotalizerLabel2.default, {
        label: item.label
      }), _react2.default.createElement(_TotalizerValue2.default, {
        item: item
      }))) : _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_TotalizerLabel2.default, {
        label: item.label
      }), _react2.default.createElement(_TotalizerValue2.default, {
        item: item
      })));
    }));
  };

  return Totalizer;
}(_react.PureComponent);

Totalizer.defaultProps = {
  value: null,
  iconBackgroundColor: '',
  icon: null,
  isLoading: false
};
Totalizer.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.node,
    iconBackgroundColor: _propTypes2.default.string,
    icon: _propTypes2.default.node,
    isLoading: _propTypes2.default.bool
  })).isRequired
};
exports.default = Totalizer;