var badIter = {};
badIter[Symbol.iterator] = function () {
  return {
    next: function () {
      return 8;
    }
  };
};
function* g() {
  try {
    yield* badIter;
  } catch (err) {
    caught = err;
  }
}
var iter = g();
var result, caught;
result = iter.next();