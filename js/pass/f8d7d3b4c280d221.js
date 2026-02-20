let C = class {
  get [async () => {}]() {
    return 1;
  }
  set [async () => {}](v) {
    return 1;
  }
  static get [async () => {}]() {
    return 1;
  }
  static set [async () => {}](v) {
    return 1;
  }
};
let c = new C();