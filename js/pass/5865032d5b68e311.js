var result;
class A {
  *g() {
    ({
      get yield() {
        return 1;
      }
    });
  }
}
result = A.prototype.g().next();