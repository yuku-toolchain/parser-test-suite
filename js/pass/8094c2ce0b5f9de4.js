var thrown = new Test262Error();
var badIter = {};
var poisonedThrow = {
  next: function () {
    return {
      done: false
    };
  }
};
Object.defineProperty(poisonedThrow, 'throw', {
  get: function () {
    throw thrown;
  }
});
badIter[Symbol.iterator] = function () {
  return poisonedThrow;
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
iter.next();
result = iter.throw();