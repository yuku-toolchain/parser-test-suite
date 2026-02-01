let x;
let C = class {
  [x ?? 1] = 2;
  static [x ?? 1] = 2;
};
let c = new C();