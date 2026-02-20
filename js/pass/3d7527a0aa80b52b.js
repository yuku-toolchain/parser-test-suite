var iter, result;
var obj = {
  *g1() {
    yield 1;
  },
  *g2() {
    [yield 1];
  },
  *g3() {
    {
      yield 1;
    }
  },
  *g4() {
    (yield 1, yield 2);
  },
  *g5() {
    (yield 1) ? yield 2 : yield 3;
  }
};
iter = obj.g1();
result = iter.next();
result = iter.next();
iter = obj.g2();
result = iter.next();
result = iter.next();
iter = obj.g3();
result = iter.next();
result = iter.next();
iter = obj.g4();
result = iter.next();
result = iter.next();
result = iter.next();
iter = obj.g5();
result = iter.next();
result = iter.next();
result = iter.next();