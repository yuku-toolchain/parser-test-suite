var iter = {};
iter[Symbol.iterator] = function () {};
var C = class {
  async *method([x] = iter) {}
};
var method = C.prototype.method;