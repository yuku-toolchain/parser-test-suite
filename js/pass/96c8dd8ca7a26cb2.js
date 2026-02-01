var callCount = 0;
var C = class {
  static method({x: [y]}) {
    callCount = callCount + 1;
  }
};
C.method({
  x: [45]
});