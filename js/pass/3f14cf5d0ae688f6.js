var callCount = 0;
var C = class {
  static method(a, b) {
    callCount = callCount + 1;
  }
};
C.method(42, 39, 1);
var ref = C.method;