var obj = {};
var unreachable = 0;
function* g() {
  yield 1;
  try {
    yield 2;
    throw obj;
  } catch (e) {
    yield e;
  }
  yield 3;
  unreachable += 1;
}
var iter, result;
iter = g();
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();
iter.next();