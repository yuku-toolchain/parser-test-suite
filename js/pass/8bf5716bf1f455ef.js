var unreachable = 0;
function* g() {
  try {
    yield 1;
    unreachable += 1;
    try {
      yield 2;
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
var result;
result = iter.next();
result = iter.throw(new Test262Error());
result = iter.next();
iter.next();