var result;
class A {
  *g() {
    yield* g2();
  }
}
var g2 = function* () {};
result = A.prototype.g().next();