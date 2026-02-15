var callCount = 0;
var C = class {
  static *method([{x, y, z} = {
    x: 44,
    y: 55,
    z: 66
  }]) {
    callCount = callCount + 1;
  }
};
C.method([]).next();