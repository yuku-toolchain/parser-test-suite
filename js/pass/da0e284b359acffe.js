var iter, result;
var obj = {
  *g1() {
    yield;
  },
  *g2() {
    yield 1;
  }
};
iter = obj.g1();
result = iter.next();
result = iter.next();
iter = obj.g2();
result = iter.next();
result = iter.next();