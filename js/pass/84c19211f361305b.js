var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var callCount = 0;
class C {
  static *method([]) {
    callCount = callCount + 1;
  }
}
C.method(iter).next();