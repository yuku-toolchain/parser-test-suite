var iter, result;
function* g() {
  yield yield 1;
}
iter = g();
result = iter.next();
result = iter.next();
result = iter.next();