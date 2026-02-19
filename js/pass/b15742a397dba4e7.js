var iter, result;
class A {
  *yield() {
    (yield 3) + (yield 4);
  }
}
iter = A.prototype.yield();
result = iter.next();
result = iter.next();
result = iter.next();