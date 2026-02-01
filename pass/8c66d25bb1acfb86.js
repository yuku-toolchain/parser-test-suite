var callCount = 0;
var C = class {
  static method() {
    callCount = callCount + 1;
  }
};
C.method(42, null);
var ref = C.method;