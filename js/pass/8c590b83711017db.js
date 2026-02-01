var iter = {};
iter[Symbol.iterator] = function () {};
class C {
  async *method([x]) {}
}
var method = C.prototype.method;