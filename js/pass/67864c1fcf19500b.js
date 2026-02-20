var iter, result;
class A {
  *g1() {
    yield 1;
  }
  *g2() {
    [yield 1];
  }
  *g3() {
    {
      yield 1;
    }
  }
  *g4() {
    (yield 1, yield 2);
  }
  *g5() {
    (yield 1) ? yield 2 : yield 3;
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