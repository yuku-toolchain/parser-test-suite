var __defineGetter__ = Object.prototype.__defineGetter__;
var noop = function () {};
var toStringCount = 0;
var key = {
  toString: function () {
    toStringCount += 1;
  }
};