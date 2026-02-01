let C = class {
  [false ? 1 : 2]() {
    return 1;
  }
  static [false ? 1 : 2]() {
    return 1;
  }
};
let c = new C();