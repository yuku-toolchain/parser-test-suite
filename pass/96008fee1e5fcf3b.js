var callCount = 0;
var C = class {
  *method(x, _ = 0) {
    arguments[0] = 1;
    x = 2;
    callCount = callCount + 1;
  }
};
C.prototype.method().next();