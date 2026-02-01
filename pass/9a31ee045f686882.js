delete Array.prototype[Symbol.iterator];
class C {
  static *method([x, y, z]) {}
}