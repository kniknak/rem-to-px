"use strict";

var assert = require("assert");
var _remtopx = require("./");

function remtopx(style) {
  return _remtopx(style, {
    compress: true,
    size: 16,
  });
}

assert.equal(remtopx("a{font-size:1.5rem;}"), "a{font-size:24px;}");
