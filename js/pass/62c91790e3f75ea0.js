function f() {}
let C = class {
  [f()] = 1;
  static [f()] = 1;
};
let c = new C();