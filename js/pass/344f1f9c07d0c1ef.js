function thrower() {}
class C {
  *method({[thrower()]: x}) {}
}
var c = new C();