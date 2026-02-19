var x = 0;
var callCount = 0;
var C = class {
  static method(x = y, y) {
    callCount = callCount + 1;
  }
};