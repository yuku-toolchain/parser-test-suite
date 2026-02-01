function f() {}
class C {
  [f()]() {
    return 1;
  }
  static [f()]() {
    return 1;
  }
}
let c = new C();