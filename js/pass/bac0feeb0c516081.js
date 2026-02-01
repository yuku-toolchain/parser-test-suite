var callCount = 0;
var C = class {
  *method() {
    callCount = callCount + 1;
  }
};
C.prototype.method(42, 'TC39').next();
var ref = C.prototype.method;