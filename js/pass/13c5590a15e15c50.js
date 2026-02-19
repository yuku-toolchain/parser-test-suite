var throwGets = 0;
var returnGets = 0;
var iterable = {
  next: function () {
    return {
      value: 1,
      done: false
    };
  },
  get throw() {
    throwGets += 1;
    return null;
  },
  get return() {
    returnGets += 1;
  }
};
iterable[Symbol.iterator] = function () {
  return iterable;
};
function* generator() {
  yield* iterable;
}
var iterator = generator();
iterator.next();