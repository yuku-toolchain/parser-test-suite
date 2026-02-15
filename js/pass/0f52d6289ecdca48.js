var iter, result;
function* g1() {
  yield;
}
function* g2() {
  [yield];
}
function* g3() {
  {
    yield;
  }
}
function* g4() {
  (yield, yield);
}
function* g5() {
  (yield) ? yield : yield;
}
iter = g1();
result = iter.next();
result = iter.next();
iter = g2();
result = iter.next();
result = iter.next();
iter = g3();
result = iter.next();
result = iter.next();
iter = g4();
result = iter.next();
result = iter.next();
result = iter.next();
iter = g5();
result = iter.next();
result = iter.next();
result = iter.next();