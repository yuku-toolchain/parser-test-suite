function thrower() {}
class C {
  async *method({x = thrower()} = {}) {}
}
var method = C.prototype.method;