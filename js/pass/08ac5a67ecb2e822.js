const fn = function () {};
var C = class {
  static async *m() {
    return 42;
  }
  a;
  b = 42;
  c = fn;
};
var c = new C();
C.m().next().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);