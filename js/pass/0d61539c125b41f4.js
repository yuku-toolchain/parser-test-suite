var callCount = 0;
var C = class {
  method([x = 23] = [undefined]) {
    callCount = callCount + 1;
  }
};
new C().method();