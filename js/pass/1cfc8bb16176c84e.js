var iter, result;
class A {
  *g1() {
    yield;
  }
  *g2() {
    yield 1;
  }
}
iter = A.prototype.g1();
result = iter.next();
result = iter.next();
iter = A.prototype.g2();
result = iter.next();
result = iter.next();