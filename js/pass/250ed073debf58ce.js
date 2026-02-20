var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
var C = class {
  static async *method([x]) {}
};
var method = C.method;