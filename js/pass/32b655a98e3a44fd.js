delete Array.prototype[Symbol.iterator];
class C {
  method([x, y, z]) {}
}
var c = new C();