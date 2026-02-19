var unreachable = 0;
function* g() {
  yield 1;
  unreachable += 1;
  try {
    yield 2;
  } catch (e) {
    yield e;
  }
  yield 3;
}
var iter, result;
iter = g();
result = iter.next();
result = iter.next();
iter.next();