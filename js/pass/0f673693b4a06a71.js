function thrower() {}
class C {
  async *method({x: y = thrower()} = {}) {}
}
var method = C.prototype.method;