var returnCount = 0;
var unreachable = 0;
var iterable = {};
var iterator = {
  return: function () {
    returnCount += 1;
  }
};
var iter;
iterable[Symbol.iterator] = function () {
  return iterator;
};
function* g() {
  var counter = 0;
  for ([...({})[yield]] of [iterable]) {
    unreachable += 1;
    counter += 1;
  }
}
iter = g();
iter.next();