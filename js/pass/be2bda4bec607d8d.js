var callCount = 0;
var C = class {
  static method({w: [x, y, z] = [4, 5, 6]}) {
    callCount = callCount + 1;
  }
};
C.method({
  w: [7, undefined]
});