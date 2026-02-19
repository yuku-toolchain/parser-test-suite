function thrower() {}
class C {
  static async *method({x = thrower()}) {}
}
var method = C.method;