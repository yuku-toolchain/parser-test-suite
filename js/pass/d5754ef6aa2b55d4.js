var nextCount = 0;
var returnCount = 0;
var iterable = {};
var thrower = function () {};
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
var x;
var counter = 0;