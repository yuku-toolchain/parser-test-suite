function* g() {
  return 1;
}
class C {
  [g()]() {
    return 1;
  }
  static [g()]() {
    return 1;
  }
}
let c = new C();