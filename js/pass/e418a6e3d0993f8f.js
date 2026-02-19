var arr = [2, 3];
var callCount = 0;
class C {
  *method() {
    callCount = callCount + 1;
  }
}
C.prototype.method(42, ...[1], ...arr).next();
var ref = C.prototype.method;