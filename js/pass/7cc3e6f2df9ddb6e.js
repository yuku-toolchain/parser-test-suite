var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var callCount = 0;
var C = class {
  static method([]) {
    callCount = callCount + 1;
  }
};
C.method(iter);