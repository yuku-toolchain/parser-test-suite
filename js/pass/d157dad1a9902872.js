let x = 1;
let C = class {
  [x]() {
    return '2';
  }
  static [x]() {
    return '2';
  }
};
let c = new C();