function f() {}
class C {
  get [f()]() {
    return 1;
  }
  set [f()](v) {
    return 1;
  }
  static get [f()]() {
    return 1;
  }
  static set [f()](v) {
    return 1;
  }
}
let c = new C();