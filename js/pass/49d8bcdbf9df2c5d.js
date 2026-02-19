var iter = (function* () {})();
iter.next();
var callCount = 0;
class C {
  static method([]) {
    callCount = callCount + 1;
  }
}
C.method(iter);