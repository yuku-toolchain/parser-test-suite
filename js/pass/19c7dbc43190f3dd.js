let C = class {
  [false ? 1 : 2] = 1;
  static [false ? 1 : 2] = 1;
};
let c = new C();