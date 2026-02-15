var callCount = 0;
var C = class {
  method([...{length}] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
};
new C().method();