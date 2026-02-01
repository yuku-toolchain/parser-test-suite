var callCount = 0;
var C = class {
  static *method({w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }}) {
    callCount = callCount + 1;
  }
};
C.method({
  w: undefined
}).next();