function thrower() {}
class C {
  static async *method({x: y = thrower()} = {}) {}
}
var method = C.method;