let C = class {
  [() => {}] = 1;
  static [() => {}] = 1;
};
let c = new C();