var caught;
class C {
  method() {
    try {
      super[test262unresolvable];
    } catch (err) {
      caught = err;
    }
  }
}
C.prototype.method();