var returnGets = 0;
var iterable = {
  next: function () {
    return {
      value: 1,
      done: false
    };
  },
  get return() {
    returnGets += 1;
    return null;
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
var result = iterator.return(2);