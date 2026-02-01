var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
class C {
  static *method([x] = g) {}
}