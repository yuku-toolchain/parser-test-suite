let C = class {
  [1 * 1]() {
    return 1;
  }
  static [1 * 1]() {
    return 1;
  }
};
let c = new C();