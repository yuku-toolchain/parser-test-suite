var nextCount = 0;
var returnCount = 0;
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
  }
};
var obj = Object.defineProperty({}, 'poisoned', {
  set: function (x) {}
});
iterable[Symbol.iterator] = function () {
  return iterator;
};