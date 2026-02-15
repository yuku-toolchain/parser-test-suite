var C = class {
  static async *method([x = (function () {})()]) {}
};
var method = C.method;