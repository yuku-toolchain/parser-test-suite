var C = class {
  static async *method([x = (function () {})()] = [undefined]) {}
};
var method = C.method;