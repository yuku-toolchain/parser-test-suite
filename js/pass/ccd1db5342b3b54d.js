function thrower() {}
class C {
  method({x: y = thrower()} = {}) {}
}
var c = new C();