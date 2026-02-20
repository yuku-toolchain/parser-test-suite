var unreachable = 0;
function* g() {
  yield 1;
  try {
    yield 2;
    unreachable += 1;
  } catch (e) {
    yield e;
  }
  yield 3;
}
var iter, result, exception;
exception = new Test262Error();
iter = g();
result = iter.next();
result = iter.next();
result = iter.throw(exception);
result = iter.next();
result = iter.next();
iter.next();