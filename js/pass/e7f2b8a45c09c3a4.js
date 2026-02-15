var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
class C {
  async *method([x] = g) {}
}
var method = C.prototype.method;