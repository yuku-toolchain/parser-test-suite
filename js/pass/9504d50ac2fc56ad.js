var callCount = 0;
class C {
  static *method() {
    callCount = callCount + 1;
  }
}
C.method(42, undefined).next();
var ref = C.method;