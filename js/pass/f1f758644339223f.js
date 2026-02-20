let x = 1;
class C {
  [x]() {
    return '2';
  }
  static [x]() {
    return '2';
  }
}
let c = new C();