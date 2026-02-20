class C {
  [true ? 1 : 2]() {
    return 2;
  }
  static [true ? 1 : 2]() {
    return 2;
  }
}
let c = new C();