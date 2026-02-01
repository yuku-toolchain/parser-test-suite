var nextCount = 0;
var iterable = {};
var x;
var iterator = {
  next: function () {
    nextCount += 1;
    return {
      done: nextCount > 10
    };
  },
  return: function () {
    return null;
  }
};
var iter;
iterable[Symbol.iterator] = function () {
  return iterator;
};
function* g() {
  var result;
  var vals = iterable;
  result = [x, ...({})[yield]] = vals;
}
iter = g();
iter.next();