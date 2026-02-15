const fn = function () {};
var C = class {
  a;
  b = 42;
  c = fn;
  m() {
    return 42;
  }
};
var c = new C();