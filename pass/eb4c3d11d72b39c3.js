var callCount = 0;
class C {
  method(a, b = 39) {
    callCount = callCount + 1;
  }
}
C.prototype.method(42, undefined, 1);
var ref = C.prototype.method;