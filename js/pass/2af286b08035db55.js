let x = 1;
let C = class {
  [x] = '2';
  static [x] = '2';
};
let c = new C();