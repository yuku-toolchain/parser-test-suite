var callCount = 0;
var C = class {
  static *method([...x] = [1]) {
    callCount = callCount + 1;
  }
};
C.method().next();