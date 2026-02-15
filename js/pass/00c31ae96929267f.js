class C {
  get [false ? 1 : 2]() {
    return 1;
  }
  set [false ? 1 : 2](v) {
    return 1;
  }
  static get [false ? 1 : 2]() {
    return 1;
  }
  static set [false ? 1 : 2](v) {
    return 1;
  }
}
let c = new C();