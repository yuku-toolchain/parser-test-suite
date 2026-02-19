var arr = [2, 3];
var callCount = 0;
var C = class {
  static *method() {
    callCount = callCount + 1;
  }
};
C.method(42, ...[1], ...arr).next();
var ref = C.method;