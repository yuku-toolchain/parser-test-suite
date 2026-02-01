var nextCount = 0;
var returnCount = 0;
var unreachable = 0;
var thisValue = null;
var args = null;
var iterable = {};
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
  var result;
  var vals = iterable;
  result = [{} = yield] = vals;
  unreachable += 1;
}
iter = g();
iter.next();
result = iter.return(888);