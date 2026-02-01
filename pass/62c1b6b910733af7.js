delete Array.prototype[Symbol.iterator];
class C {
  static async *method([x, y, z]) {}
}
var method = C.method;