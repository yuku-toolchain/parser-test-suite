var nextCount = 0;
var returnCount = 0;
var iterable = {};
var thrower = function () {};
function ReturnError() {}
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
iterable[Symbol.iterator] = function () {
  return iterator;
};
var counter = 0;