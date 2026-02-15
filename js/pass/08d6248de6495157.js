var callCount = 0;
class C {
  static *method(a, b = 39) {
    callCount = callCount + 1;
  }
}
C.method(42, undefined, 1).next();
var ref = C.method;