var iter = {};
iter[Symbol.iterator] = function () {};
class C {
  async *method([x] = iter) {}
}
var method = C.prototype.method;