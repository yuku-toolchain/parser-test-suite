var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
class C {
  *method([x] = g) {}
}
var c = new C();