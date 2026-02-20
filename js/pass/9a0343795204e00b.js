function* g() {
  return 1;
}
let C = class {
  [g()] = () => {
    return 1;
  };
  static [g()] = () => {
    return 1;
  };
};
let c = new C();