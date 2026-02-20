let C = class {
  [true ? 1 : 2] = 2;
  static [true ? 1 : 2] = 2;
};
let c = new C();