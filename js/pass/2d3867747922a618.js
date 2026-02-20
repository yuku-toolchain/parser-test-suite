let C = class {
  [function () {}] = 1;
  static [function () {}] = 1;
};
let c = new C();