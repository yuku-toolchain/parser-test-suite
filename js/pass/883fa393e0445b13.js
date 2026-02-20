var nextCount = 0;
var returnCount = 0;
function ReturnError() {}
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
    throw new ReturnError();
  }
};
var thrower = function () {};
iterable[Symbol.iterator] = function () {
  return iterator;
};
var counter = 0;