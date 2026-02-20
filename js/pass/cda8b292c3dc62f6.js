var nextCount = 0;
var returnCount = 0;
var iterable = {};
var x, y;
var iterator = {
  next: function () {
    nextCount += 1;
    return {
      value: nextCount,
      done: nextCount > 1
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
for ([x, ...y] of [iterable]) {
  counter += 1;
}