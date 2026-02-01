var args, thisValue;
var callCount = 0;
var spyIterator = {
  next: function () {
    return {
      done: false
    };
  },
  throw: function () {
    callCount += 1;
    args = arguments;
    thisValue = this;
    return {
      done: true
    };
  }
};
var spyIterable = {};
spyIterable[Symbol.iterator] = function () {
  return spyIterator;
};
function* g() {
  yield* spyIterable;
}
var iter = g();
iter.next(8888);
iter.throw(7777);