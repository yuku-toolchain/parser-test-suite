function thrower() {}
class C {
  *method({x = thrower()}) {}
}
var c = new C();