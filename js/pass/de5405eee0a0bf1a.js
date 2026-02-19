var callCount = 0;
var C = class {
  method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
};