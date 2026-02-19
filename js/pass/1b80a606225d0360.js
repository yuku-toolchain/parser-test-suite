function f() {}
let C = class {
  [f()]() {
    return 1;
  }
  static [f()]() {
    return 1;
  }
};
let c = new C();