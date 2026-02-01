delete Array.prototype[Symbol.iterator];
class C {
  async *method([x, y, z]) {}
}
var method = C.prototype.method;