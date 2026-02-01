function* g() {
  return 1;
}
let C = class {
  [g()] = 1;
  static [g()] = 1;
};
let c = new C();