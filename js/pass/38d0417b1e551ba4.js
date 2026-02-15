var nextCount = 0;
var returnCount = 0;
var x;
function ReturnError() {}
var iterable = {};
var iterator = {
  next: function () {
    nextCount += 1;
    return {
      done: nextCount > 10
    };
  },
  return: function () {
    returnCount += 1;
    throw new ReturnError();
  }
};
var thrower = function () {};
iterable[Symbol.iterator] = function () {
  return iterator;
};
var counter = 0;