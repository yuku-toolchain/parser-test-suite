var __lookupGetter__ = Object.prototype.__lookupGetter__;
var toStringCount = 0;
var key = {
  toString: function () {
    toStringCount += 1;
  }
};