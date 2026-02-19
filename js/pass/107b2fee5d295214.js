var _;
var iterable = {};
var nextCount = 0;
var iterator = {
  next: function () {
    nextCount += 1;
    return {
      done: nextCount > 10
    };
  },
  return: function () {
    return null;
  }
};
iterable[Symbol.iterator] = function () {
  return iterator;
};
var counter = 0;