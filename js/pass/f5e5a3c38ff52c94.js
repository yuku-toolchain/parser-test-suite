var callCount = 0;
var C = class {
  static method([x, y, z]) {
    callCount = callCount + 1;
  }
};
C.method([1, 2, 3]);