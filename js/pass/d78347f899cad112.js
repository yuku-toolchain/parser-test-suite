var iter = (function* () {})();
iter.next();
var callCount = 0;
var C = class {
  static method([] = iter) {
    callCount = callCount + 1;
  }
};
C.method();