var iter, result;
function* g() {
  yield;
  1;
}
iter = g();
result = iter.next();
result = iter.next();