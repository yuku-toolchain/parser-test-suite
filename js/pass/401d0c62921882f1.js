var callCount = 0;
var C = class {
  method([...[x, y, z]]) {
    callCount = callCount + 1;
  }
};
new C().method([3, 4, 5]);