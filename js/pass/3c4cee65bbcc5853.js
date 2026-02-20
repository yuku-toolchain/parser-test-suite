class C {
  static async m() {
    return 42;
  }
  a;
  b = 42;
}
var c = new C();
C.m().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);