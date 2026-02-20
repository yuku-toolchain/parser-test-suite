var result;
class A {
  *g1() {
    return;
  }
  *g2() {
    return 1;
  }
}
result = A.prototype.g1().next();
result = A.prototype.g2().next();