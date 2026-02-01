var thrown = new Test262Error();
var poisonedIter = Object.defineProperty({}, Symbol.iterator, {
  get: function () {
    throw thrown;
  }
});
function* g() {
  try {
    yield* poisonedIter;
  } catch (err) {
    caught = err;
  }
}
var iter = g();
var result, caught;
result = iter.next();