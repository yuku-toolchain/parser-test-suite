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
var obj = {};
iterable[Symbol.iterator] = function () {
  return iterator;
};
var result;
var vals = iterable;
result = [...obj['a' + 'b']] = vals;