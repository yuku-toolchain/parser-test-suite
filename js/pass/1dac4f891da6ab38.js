var x = 0;
var callCount = 0;
var C = class {
  static async *method(x = x) {
    callCount = callCount + 1;
  }
};