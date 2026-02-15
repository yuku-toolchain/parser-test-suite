var callCount = 0;
var C = class {
  *method([...x] = [1]) {
    callCount = callCount + 1;
  }
};
new C().method().next();