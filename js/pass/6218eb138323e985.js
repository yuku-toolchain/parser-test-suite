var x = Symbol();
var y = Symbol();
var C = class {
  static async *m() {
    return 42;
  }
  [x];
  [y] = 42;
};
var c = new C();
C.m().next().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);