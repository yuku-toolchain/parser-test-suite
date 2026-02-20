var callCount = 0;
var C = class {
  static async *method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
};