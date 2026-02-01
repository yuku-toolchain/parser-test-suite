var unreachable = 0;
function* g() {
  try {
    yield 1;
    try {
      yield 2;
      throw exception;
    } catch (e) {
      yield e;
    }
    yield 3;
    unreachable += 1;
  } finally {
    yield 4;
  }
  yield 5;
}
var exception = new Error();
var iter = g();
var result;
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.throw(new Test262Error());
result = iter.next();
iter.next();