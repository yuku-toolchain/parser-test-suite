class C {
  [async () => {}]() {
    return 1;
  }
  static [async () => {}]() {
    return 1;
  }
}
let c = new C();