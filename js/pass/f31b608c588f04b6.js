var x = "b";
class C {
  async *m() {
    return 42;
  }
  [x] = 42;
  [10] = "meep";
  ["not initialized"];
}
var c = new C();
c.m().next().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);