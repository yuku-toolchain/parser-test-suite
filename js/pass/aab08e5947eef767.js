var callCount = 0;
var C = class {
  method(a) {
    callCount = callCount + 1;
  }
};
C.prototype.method(42, 39);
var ref = C.prototype.method;