"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestingLibrary = require("react-testing-library");

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Alert', function () {
  describe('action button', function () {
    it('should be displayed if props are passed', function () {
      var label = 'Action';
      var onClick = jest.fn();

      var _render = (0, _reactTestingLibrary.render)(_react2.default.createElement(_index2.default, {
        type: "error",
        action: {
          label: label,
          onClick: onClick
        }
      }, "Foo")),
          getByText = _render.getByText;

      var actionButton = getByText(label);
      expect(actionButton).toBeDefined();

      _reactTestingLibrary.fireEvent.click(actionButton);

      expect(onClick).toHaveBeenCalled();
    });
  });
  describe('onClose', function () {
    it('should be called on click close button', function () {
      var onClose = jest.fn();

      var _render2 = (0, _reactTestingLibrary.render)(_react2.default.createElement(_index2.default, {
        type: "error",
        onClose: onClose
      }, "Foo")),
          getByTitle = _render2.getByTitle;

      var closeButton = getByTitle('Close');

      _reactTestingLibrary.fireEvent.click(closeButton);

      expect(onClose).toHaveBeenCalled();
    });
    it('should be called after autoClose time passes', function () {
      jest.useFakeTimers();
      var onClose = jest.fn();
      (0, _reactTestingLibrary.render)(_react2.default.createElement(_index2.default, {
        type: "error",
        autoClose: 1,
        onClose: onClose
      }, "Foo"));
      jest.runAllTimers();
      expect(onClose).toHaveBeenCalled();
    });
    it('should not be called if no click happens or autoClose time is not defined', function () {
      jest.useFakeTimers();
      var onClose = jest.fn();
      (0, _reactTestingLibrary.render)(_react2.default.createElement(_index2.default, {
        type: "error",
        onClose: onClose
      }, "Foo"));
      jest.runAllTimers();
      expect(onClose).not.toHaveBeenCalled();
    });
  });
});