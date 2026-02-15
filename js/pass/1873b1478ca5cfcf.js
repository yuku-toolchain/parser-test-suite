var iter, result;
class A {
  *g1() {
    yield;
  }
  *g2() {
    [yield];
  }
  *g3() {
    {
      yield;
    }
  }
  *g4() {
    (yield, yield);
  }
  *g5() {
    (yield) ? yield : yield;
  }
}
iter = A.prototype.g1();
result = iter.next();
result = iter.next();
iter = A.prototype.g2();
result = iter.next();
result = iter.next();
iter = A.prototype.g3();
result = iter.next();
result = iter.next();
iter = A.prototype.g4();
result = iter.next();
result = iter.next();
result = iter.next();
iter = A.prototype.g5();
result = iter.next();
result = iter.next();
result = iter.next();