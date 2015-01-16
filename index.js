"use strict";

var css = require("css");
var walk = require("rework-walk");

function remtopx(value, size) {
  // From https://github.com/nfroidure/rework-rem2px/blob/master/src/index.js
  if (/([0-9]+)\.?([0-9]*)\s*rem/.test(value)) {
    return parseFloat(value, 10) * size + 'px';
  }
  return value;
}

module.exports = function(styles, options) {
  options = options || {};
  var ast = css.parse(styles);
  walk(ast.stylesheet, function(rule) {
    if (rule.declarations) {
      rule.declarations.forEach(function(decl) {
        decl.value = remtopx(decl.value, options.size || 16);
      });
    }
  });
  return css.stringify(ast, { compress: options.compress });
};
