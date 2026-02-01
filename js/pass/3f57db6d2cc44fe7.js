var unreachable = 0;
function* g() {
  yield 1;
  try {
    yield 2;
    unreachable += 1;
  } finally {
    yield 3;
  }
  yield 4;
}
var iter = g();
var result;
result = iter.next();
result = iter.next();
result = iter.throw(new Test262Error());
result = iter.next();
iter.next();