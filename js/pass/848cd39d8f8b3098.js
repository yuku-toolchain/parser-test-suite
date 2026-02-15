var x = 0;
var callCount = 0;
var C = class {
  static *method(x, y = x, z = y) {
    callCount = callCount + 1;
  }
};
C.method(3).next();
var ref = C.method;