var iter, result;
function* g1() {
  yield;
}
function* g2() {
  yield 1;
}
iter = g1();
result = iter.next();
result = iter.next();
iter = g2();
result = iter.next();
result = iter.next();