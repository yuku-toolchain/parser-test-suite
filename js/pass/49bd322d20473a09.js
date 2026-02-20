var result;
class A {
  *g() {
    ({
      yield: 1
    });
  }
}
result = A.prototype.g().next();