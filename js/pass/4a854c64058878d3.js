var values = [1, 2, 3];
var callCount = 0;
var C = class {
  *method([...x]) {
    callCount = callCount + 1;
  }
};
new C().method(values).next();