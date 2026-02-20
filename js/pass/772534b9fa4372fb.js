var callCount = 0;
var C = class {
  static method() {
    callCount = callCount + 1;
  }
};
C.method(42, 'TC39');
var ref = C.method;