var iter = (function* () {})();
iter.next();
var callCount = 0;
var C = class {
  method([]) {
    callCount = callCount + 1;
  }
};
new C().method(iter);