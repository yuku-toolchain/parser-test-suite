let C = class {
  get [1 / 1]() {
    return 1;
  }
  set [1 / 1](v) {
    return 1;
  }
  static get [1 / 1]() {
    return 1;
  }
  static set [1 / 1](v) {
    return 1;
  }
};
let c = new C();