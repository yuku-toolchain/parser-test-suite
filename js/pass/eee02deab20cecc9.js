var callCount = 0;
var C = class {
  method({x: y = 33} = {}) {
    callCount = callCount + 1;
  }
};
new C().method();