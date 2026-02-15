var iter = {};
iter[Symbol.iterator] = function () {};
var C = class {
  static async *method([x] = iter) {}
};
var method = C.method;