var callCount = 0;
var C = class {
  static method(a, b = 39) {
    callCount = callCount + 1;
  }
};
C.method(42, undefined, 1);
var ref = C.method;