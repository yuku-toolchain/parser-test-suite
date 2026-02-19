var subject = {};
var symbol = Symbol('');
var toStringCount = 0;
var key = {
  toString: function () {
    toStringCount += 1;
  }
};