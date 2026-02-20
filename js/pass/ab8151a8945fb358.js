var iter, result;
var obj = {
  *g1() {
    yield;
  },
  *g2() {
    [yield];
  },
  *g3() {
    {
      yield;
    }
  },
  *g4() {
    (yield, yield);
  },
  *g5() {
    (yield) ? yield : yield;
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