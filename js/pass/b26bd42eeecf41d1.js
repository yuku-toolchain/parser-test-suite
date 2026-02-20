var g = {};
g[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};
class C {
  static async *method([x]) {}
}
var method = C.method;