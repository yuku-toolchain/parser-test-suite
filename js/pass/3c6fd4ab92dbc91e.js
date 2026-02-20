var callCount = 0;
class C {
  static method() {
    callCount = callCount + 1;
  }
}
C.method(42);
var ref = C.method;