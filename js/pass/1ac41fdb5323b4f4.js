var callCount = 0;
var C = class {
  static *method([x, y, z] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
};
C.method().next();