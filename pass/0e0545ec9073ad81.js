class C {
  get [() => {}]() {
    return 1;
  }
  set [() => {}](v) {
    return 1;
  }
  static get [() => {}]() {
    return 1;
  }
  static set [() => {}](v) {
    return 1;
  }
}
let c = new C();