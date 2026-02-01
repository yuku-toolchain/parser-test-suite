class C {
  get [true ? 1 : 2]() {
    return 2;
  }
  set [true ? 1 : 2](v) {
    return 2;
  }
  static get [true ? 1 : 2]() {
    return 2;
  }
  static set [true ? 1 : 2](v) {
    return 2;
  }
}
let c = new C();