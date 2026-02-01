var nextCount = 0;
var returnCount = 0;
var iterable = {};
var thrower = function () {};
var x;
var iterator = {
  next: function () {
    nextCount += 1;
    return {
      done: true
    };
  },
  return: function () {
    returnCount += 1;
  }
};
iterable[Symbol.iterator] = function () {
  return iterator;
};
var counter = 0;
for ([x] of [iterable]) {
  counter += 1;
}