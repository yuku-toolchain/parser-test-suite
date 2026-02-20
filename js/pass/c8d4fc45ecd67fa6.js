var callCount = 0;
var C = class {
  static method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
};