var values = [2, 1, 3];
var callCount = 0;
var C = class {
  method([[...x] = values] = []) {
    callCount = callCount + 1;
  }
};
new C().method();