function thrower() {}
class C {
  static method({x: y = thrower()} = {}) {}
}