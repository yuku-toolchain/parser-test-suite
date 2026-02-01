var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
class C {
  async *method([x]) {}
}
var method = C.prototype.method;