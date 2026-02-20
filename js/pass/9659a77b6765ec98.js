let C = class {
  [async () => {}] = 1;
  static [async () => {}] = 1;
};
let c = new C();