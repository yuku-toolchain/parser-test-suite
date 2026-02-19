var unreachable = 0;
function* g() {
  yield 1;
  try {
    yield 2;
    throw exception;
  } catch (e) {
    yield e;
    unreachable += 1;
  }
  yield 3;
}
var iter, result, exception;
exception = new Test262Error();
iter = g();
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();
iter.next();