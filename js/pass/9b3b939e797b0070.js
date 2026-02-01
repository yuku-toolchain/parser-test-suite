var callCount = 0;
class C {
  method() {
    callCount++;
  }
}
C.prototype.method();