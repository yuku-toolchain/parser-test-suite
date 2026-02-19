var callCount = 0;
var C = class {
  static *method(a) {
    callCount = callCount + 1;
  }
};
C.method(42, 39).next();
var ref = C.method;