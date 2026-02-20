function thrower() {}
class C {
  async *method({[thrower()]: x}) {}
}
var method = C.prototype.method;