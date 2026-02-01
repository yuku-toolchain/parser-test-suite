let C = class {
  get [1.1]() {
    return 2;
  }
  set [1.1](v) {
    return 2;
  }
  static get [1.1]() {
    return 2;
  }
  static set [1.1](v) {
    return 2;
  }
};
let c = new C();