var nextCount = 0;
var returnCount = 0;
var unreachable = 0;
var x;
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
  unreachable += 1;
}
iter = g();
iter.next();