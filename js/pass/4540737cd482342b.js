var callCount = 0;
class C {
  *method(a) {
    callCount = callCount + 1;
  }
}
C.prototype.method(42, 39).next();
var ref = C.prototype.method;