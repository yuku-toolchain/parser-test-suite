var callCount = 0;
var C = class {
  method() {
    callCount++;
  }
};
C.prototype.method();