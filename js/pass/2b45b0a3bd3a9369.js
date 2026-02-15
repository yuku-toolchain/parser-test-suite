var __defineSetter__ = Object.prototype.__defineSetter__;
var noop = function () {};
var toStringCount = 0;
var key = {
  toString: function () {
    toStringCount += 1;
  }
};