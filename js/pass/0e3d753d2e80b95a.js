var iter = {};
iter[Symbol.iterator] = function () {};
class C {
  static async *method([x]) {}
}
var method = C.method;