let x = 1;
let C = class {
  get [x]() {
    return '2';
  }
  set [x](v) {
    return '2';
  }
  static get [x]() {
    return '2';
  }
  static set [x](v) {
    return '2';
  }
};
let c = new C();