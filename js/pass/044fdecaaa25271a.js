var nextCount = 0;
var returnCount = 0;
var _;
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
    return {};
  }
};
iterable[Symbol.iterator] = function () {
  return iterator;
};
var counter = 0;
for ([_] of [iterable]) {
  counter += 1;
}