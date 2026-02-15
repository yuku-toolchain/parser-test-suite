var callCount = 0;
var C = class {
  static *method() {
    callCount = callCount + 1;
  }
};
C.method(42, undefined).next();
var ref = C.method;