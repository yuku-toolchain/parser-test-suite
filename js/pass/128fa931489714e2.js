var nextCount = 0;
var returnCount = 0;
var x;
var iterable = {};
var iterator = {
  next: function () {
    nextCount += 1;
  },
  return: function () {
    returnCount += 1;
  }
};
iterable[Symbol.iterator] = function () {
  return iterator;
};