let C = class {
  [1]() {
    return 2;
  }
  static [1]() {
    return 2;
  }
};
let c = new C();