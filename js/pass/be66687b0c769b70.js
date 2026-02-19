var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
var C = class {
  static *method([x]) {}
};