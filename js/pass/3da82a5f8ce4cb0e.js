var callCount = 0;
var C = class {
  *method([...x] = [1, 2]) {
    callCount = callCount + 1;
  }
};
new C().method().next();