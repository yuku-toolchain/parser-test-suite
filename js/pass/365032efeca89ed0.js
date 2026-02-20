var callCount = 0;
class C {
  static method(a) {
    callCount = callCount + 1;
  }
}
C.method(42, 39);
var ref = C.method;