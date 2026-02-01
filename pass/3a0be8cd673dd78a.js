var unreachable = 0;
function* g() {
  try {
    yield 1;
    try {
      yield 2;
      unreachable += 1;
    } catch (e) {
      yield e;
    }
    yield 3;
  } finally {
    yield 4;
  }
  yield 5;
}
var iter = g();
var exception = new Error();
var result;
result = iter.next();
result = iter.next();
result = iter.throw(exception);
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();
iter.next();