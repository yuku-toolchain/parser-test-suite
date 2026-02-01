var nextCount = 0;
var returnCount = 0;
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
  }
};
iterable[Symbol.iterator] = function () {
  return iterator;
};