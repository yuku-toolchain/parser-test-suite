var x = 0;
var callCount = 0;
var C = class {
  static *method(x = x) {
    callCount = callCount + 1;
  }
};