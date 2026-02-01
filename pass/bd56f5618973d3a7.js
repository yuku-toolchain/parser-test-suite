var callCount = 0;
var C = class {
  *method([...{length}]) {
    callCount = callCount + 1;
  }
};
new C().method([1, 2, 3]).next();