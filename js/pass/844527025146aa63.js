class C {
  async *m() {
    return 42;
  }
  a;
  b = 42;
}
var c = new C();
c.m().next().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);