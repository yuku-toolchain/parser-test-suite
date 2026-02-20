var nextCount = 0;
var returnCount = 0;
var thisValue = null;
var args = null;
var iterable = {};
var iterator = {
  next: function () {
    nextCount += 1;
    return {
      done: true
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