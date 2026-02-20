var x = Symbol();
var y = Symbol();
var C = class {
  [x];
  [y] = 42;
  m() {
    return 42;
  }
};
var c = new C();