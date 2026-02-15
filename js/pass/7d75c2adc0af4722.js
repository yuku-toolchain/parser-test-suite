var nextCount = 0;
var returnCount = 0;
var thisValue = null;
var args = null;
var iterable = {};
var x;
var iterator = {
  next: function () {
    nextCount += 1;
    return {
      done: nextCount > 10
    };
  },
  return: function () {
    returnCount += 1;
    thisValue = this;
    args = arguments;
  }
};
var thrower = function () {};
iterable[Symbol.iterator] = function () {
  return iterator;
};
var counter = 0;