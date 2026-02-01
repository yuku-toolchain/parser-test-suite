function thrower() {}
class C {
  static *method({x = thrower()}) {}
}