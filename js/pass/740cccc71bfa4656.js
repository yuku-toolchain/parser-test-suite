var callCount = 0;
class C {
  static *method(a, b) {
    callCount = callCount + 1;
  }
}
C.method(42, 39, 1).next();
var ref = C.method;