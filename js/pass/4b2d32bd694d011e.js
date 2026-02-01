function thrower() {}
class C {
  static async *method({[thrower()]: x}) {}
}
var method = C.method;