let C = class {
  [function () {}]() {
    return 1;
  }
  static [function () {}]() {
    return 1;
  }
};
let c = new C();