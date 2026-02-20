var __lookupSetter__ = Object.prototype.__lookupSetter__;
var toStringCount = 0;
var key = {
  toString: function () {
    toStringCount += 1;
  }
};