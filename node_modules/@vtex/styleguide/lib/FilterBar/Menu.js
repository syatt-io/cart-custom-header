"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_WIDTH = 292;
var CONTAINER_MARGIN = 6;
var WINDOW_MARGIN = 10;

var Menu =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Menu, _Component);

  function Menu(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasCalculatedSize: false,
      // hides the menu while calculating its size and position
      isUpwards: false,
      // opens the menu from bottom to top, if it doesn't fit on the screen otherwise
      isVisible: false,
      // triggers the opening animation
      menuHeight: 0,
      containerHeight: 0
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuBounds", function () {
      return _this.menuElement.current && _this.menuElement.current.getBoundingClientRect && _this.menuElement.current.getBoundingClientRect();
    });

    _defineProperty(_assertThisInitialized(_this), "getContainerBounds", function () {
      return _this.containerElement.current && _this.containerElement.current.getBoundingClientRect && _this.containerElement.current.getBoundingClientRect();
    });

    _this.containerElement = _react2.default.createRef();
    _this.menuElement = _react2.default.createRef();
    return _this;
  }

  var _proto = Menu.prototype;

  _proto.updateMenu = function updateMenu() {
    var _this2 = this;

    var menuBounds = this.getMenuBounds();
    var containerBounds = this.getContainerBounds();
    if (!menuBounds || !containerBounds) return;
    var containerHeight = containerBounds.height;
    var initialMenuHeight = menuBounds.height;
    var itemHeight = initialMenuHeight / this.props.options.length;
    var isOutOfBounds = menuBounds.top + initialMenuHeight + containerHeight > window.innerHeight;
    var isUpwards = isOutOfBounds && containerBounds.top > window.innerHeight / 2;
    var maxMenuHeight = isUpwards ? menuBounds.top - CONTAINER_MARGIN - WINDOW_MARGIN : window.innerHeight - menuBounds.top - containerHeight - CONTAINER_MARGIN - WINDOW_MARGIN; // Makes the height of the menu, if it doesn't entirely fit on the screen,
    // fall in the middle of an item, to hint that the menu scrolls

    var visibleItemsNum = Math.round(maxMenuHeight / itemHeight);
    var adjustedMenuHeight = visibleItemsNum * itemHeight - itemHeight / 2;
    var menuHeight = maxMenuHeight < initialMenuHeight ? adjustedMenuHeight : 0;
    this.setState({
      containerHeight: containerHeight,
      menuHeight: menuHeight,
      isUpwards: isUpwards,
      hasCalculatedSize: true
    }, function () {
      // triggers the menu opening animation
      setTimeout(function () {
        _this2.setState({
          isVisible: true
        });
      }, 1);
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      this.updateMenu();
    }

    if (prevProps.open && !this.props.open) {
      this.setState({
        hasCalculatedSize: false,
        isUpwards: false,
        isVisible: false,
        menuHeight: 0,
        containerHeight: 0
      });
    }
  };

  _proto.render = function render() {
    var _ref;

    var _this$props = this.props,
        width = _this$props.width,
        align = _this$props.align,
        open = _this$props.open,
        children = _this$props.children,
        button = _this$props.button;
    var _this$state = this.state,
        hasCalculatedSize = _this$state.hasCalculatedSize,
        isUpwards = _this$state.isUpwards,
        isVisible = _this$state.isVisible,
        menuHeight = _this$state.menuHeight,
        containerHeight = _this$state.containerHeight;
    var isRight = align === 'right';
    return _react2.default.createElement("div", {
      className: "relative"
    }, _react2.default.createElement("div", {
      ref: this.containerElement
    }, button), open && _react2.default.createElement("div", {
      ref: this.menuElement,
      style: (_ref = {}, _ref[isUpwards ? 'bottom' : 'top'] = containerHeight + CONTAINER_MARGIN, _ref.transform = !hasCalculatedSize || isVisible ? 'scale(1)' : 'scale(0.9, 0.6)', _ref.transformOrigin = (isRight ? '75%' : '25%') + " " + (isUpwards ? '100%' : '0'), _ref.transition = isVisible ? "transform 50ms ease-out, opacity 25ms" : 'none', _ref.boxShadow = '0px 1px 18px rgba(0, 0, 0, 0.14)', _ref),
      className: "absolute z-999 ba bw1 b--muted-4 br2 bg-base " + (isRight ? 'right-0' : 'left-0') + "\n            " + (isVisible ? 'o-100' : 'o-0')
    }, _react2.default.createElement("div", {
      className: "b2 br2 bg-base",
      style: {
        width: width || DEFAULT_WIDTH
      }
    }, _react2.default.createElement("div", {
      style: {
        height: menuHeight || 'auto'
      },
      className: menuHeight ? 'overflow-auto' : ''
    }, children))));
  };

  return Menu;
}(_react.Component);

Menu.defaultProps = {
  options: [],
  align: 'right',
  open: false
};
Menu.propTypes = {
  /** The element which will open the menu--the menu will
   * be positioned around this element */
  children: _propTypes2.default.node,

  /** Menu visibility (default is false) */
  open: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  button: _propTypes2.default.element,

  /** Menu Box width (default is 292px) */
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  /** function to close the menu after clicking an option */
  onClose: _propTypes2.default.func,

  /** Menu Box align (default is right) */
  align: _propTypes2.default.oneOf(['right', 'left'])
};
exports.default = Menu;