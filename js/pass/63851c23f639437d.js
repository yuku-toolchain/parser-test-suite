let C = class {
  get [function () {}]() {
    return 1;
  }
  set [function () {}](v) {
    return 1;
  }
  static get [function () {}]() {
    return 1;
  }
  static set [function () {}](v) {
    return 1;
  }
};
let c = new C();