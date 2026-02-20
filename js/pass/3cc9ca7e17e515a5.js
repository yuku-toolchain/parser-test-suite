var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
var C = class {
  async *method([x] = g) {}
};
var method = C.prototype.method;