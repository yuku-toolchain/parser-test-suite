var iter, result;
class A {
  *g() {
    yield;
    1;
  }
}
iter = A.prototype.g();
result = iter.next();
result = iter.next();