let x = 0;
class C {
  [x ||= 1]() {
    return 2;
  }
  static [x ||= 1]() {
    return 2;
  }
}
let c = new C();