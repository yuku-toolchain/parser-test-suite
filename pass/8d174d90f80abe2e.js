class C {
  [function () {}]() {
    return 1;
  }
  static [function () {}]() {
    return 1;
  }
}
let c = new C();