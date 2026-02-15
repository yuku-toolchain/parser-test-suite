var iter = {};
iter[Symbol.iterator] = function () {};
var C = class {
  async *method([x]) {}
};
var method = C.prototype.method;