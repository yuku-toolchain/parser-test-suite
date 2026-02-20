var x = 0;
var callCount = 0;
class C {
  method(x, y = x, z = y) {
    callCount = callCount + 1;
  }
}
C.prototype.method(3);
var ref = C.prototype.method;