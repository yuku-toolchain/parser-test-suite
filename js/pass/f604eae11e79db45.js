var result, iter;
function* g1() {
  yield 1;
}
function* g2() {
  [yield 1];
}
function* g3() {
  {
    yield 1;
  }
}
function* g4() {
  (yield 1, yield 2);
}
function* g5() {
  (yield 1) ? yield 2 : yield 3;
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