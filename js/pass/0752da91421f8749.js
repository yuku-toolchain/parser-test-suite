let x = 0;
class C {
  get [x &&= 1]() {
    return 2;
  }
  set [x &&= 1](v) {
    return 2;
  }
  static get [x &&= 1]() {
    return 2;
  }
  static set [x &&= 1](v) {
    return 2;
  }
}
let c = new C();