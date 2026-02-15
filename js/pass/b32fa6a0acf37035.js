const fn = function () {};
var C = class {
  *m() {
    return 42;
  }
  a;
  b = 42;
  c = fn;
};
var c = new C();