var callCount = 0;
var C = class {
  static *method() {
    callCount++;
  }
};
C.method().next();