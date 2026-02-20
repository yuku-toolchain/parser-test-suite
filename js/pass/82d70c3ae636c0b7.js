var callCount = 0;
class C {
  method() {
    callCount = callCount + 1;
  }
}
C.prototype.method(42, undefined);
var ref = C.prototype.method;