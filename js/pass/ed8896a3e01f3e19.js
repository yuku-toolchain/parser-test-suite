var iterable = {};
var iterator = {
  return: function () {
    return null;
  }
};
var iter;
iterable[Symbol.iterator] = function () {
  return iterator;
};
function* g() {
  var counter = 0;
  for ([...({})[yield]] of [iterable]) {
    counter += 1;
  }
}
iter = g();
iter.next();