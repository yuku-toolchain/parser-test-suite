var returnCount = 0;
var unreachable = 0;
var thisValue = null;
var args = null;
var iterable = {};
var iterator = {
  next() {},
  return: function () {
    returnCount += 1;
    thisValue = this;
    args = arguments;
    return {};
  }
};
var iter, result;
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
result = iter.return(444);