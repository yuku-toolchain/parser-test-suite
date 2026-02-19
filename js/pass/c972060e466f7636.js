var x = Symbol();
var y = Symbol();
var C = class {
  static m() {
    return 42;
  }
  [x];
  [y] = 42;
};
var c = new C();