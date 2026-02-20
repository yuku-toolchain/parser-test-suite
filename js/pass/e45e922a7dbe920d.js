var callCount = 0;
var C = class {
  static method([x = 23] = [undefined]) {
    callCount = callCount + 1;
  }
};
C.method();