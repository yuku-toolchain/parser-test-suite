function* g() {
  return 1;
}
let C = class {
  get [g()]() {
    return 1;
  }
  set [g()](v) {
    return 1;
  }
  static get [g()]() {
    return 1;
  }
  static set [g()](v) {
    return 1;
  }
};
let c = new C();