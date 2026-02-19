var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var callCount = 0;
class C {
  method([...[]]) {
    callCount = callCount + 1;
  }
}
new C().method(iter);