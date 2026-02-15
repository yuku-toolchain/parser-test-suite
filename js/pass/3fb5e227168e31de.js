var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
var C = class {
  method([x]) {}
};
var c = new C();