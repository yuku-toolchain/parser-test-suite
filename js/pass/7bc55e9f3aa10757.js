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
  var result;
  var vals = iterable;
  result = [...({})[yield]] = vals;
}
iter = g();
iter.next();