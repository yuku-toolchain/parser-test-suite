var callCount = 0;
class C {
  *method() {
    callCount = callCount + 1;
  }
}
C.prototype.method(42, undefined).next();
var ref = C.prototype.method;