var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
class C {
  *method([x]) {}
}
var c = new C();