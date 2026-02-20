var callCount = 0;
var C = class {
  async *method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
};