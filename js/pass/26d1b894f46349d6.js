let x = 1;
class C {
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
}
let c = new C();