var x = 0;
var callCount = 0;
var C = class {
  method(x = x) {
    callCount = callCount + 1;
  }
};