var nextCount = 0;
var returnCount = 0;
var unreachable = 0;
var iterator = {
  next: function () {
    nextCount += 1;
    return {
      done: false,
      value: undefined
    };
  },
  return: function () {
    returnCount += 1;
  }
};
var iterable = {};
iterable[Symbol.iterator] = function () {
  return iterator;
};
function* g() {
  var counter = 0;
  for ([{} = yield] of [iterable]) {
    unreachable += 1;
    counter += 1;
  }
}
var iter = g();
iter.next();