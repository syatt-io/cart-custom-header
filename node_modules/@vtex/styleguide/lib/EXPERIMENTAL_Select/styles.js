"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getFontClassNameFromSize = exports.getFontClassNameFromSize = function getFontClassNameFromSize(size) {
  switch (size) {
    case 'large':
      return 't-body';

    case 'small':
    default:
      return 't-small';
  }
};

var getTagPaddingFromSize = exports.getTagPaddingFromSize = function getTagPaddingFromSize(size) {
  switch (size) {
    case 'large':
      return '.25rem .5rem';
    // pv2 ph3

    case 'small':
      return '0 .125rem';
    // pv0 ph1

    default:
      return '.25rem .5rem';
    // pv2 ph3
  }
};