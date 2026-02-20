var callCount = 0;
var C = class {
  static method([...{length}] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
};
C.method();