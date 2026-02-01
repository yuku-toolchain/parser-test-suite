let C = class {
  get [2 ** 2]() {
    return 4;
  }
  set [2 ** 2](v) {
    return 4;
  }
  static get [2 ** 2]() {
    return 4;
  }
  static set [2 ** 2](v) {
    return 4;
  }
};
let c = new C();