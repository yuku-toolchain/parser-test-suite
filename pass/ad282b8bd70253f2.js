var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
var obj = {
  async *method([x] = g) {}
};