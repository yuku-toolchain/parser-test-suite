var callCount = 0;
class C {
  *method(a, b) {
    callCount = callCount + 1;
  }
}
C.prototype.method(42, 39, 1).next();
var ref = C.prototype.method;