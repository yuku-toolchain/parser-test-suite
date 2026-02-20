var callCount = 0;
var C = class {
  static method([_, x] = []) {
    callCount = callCount + 1;
  }
};
C.method();