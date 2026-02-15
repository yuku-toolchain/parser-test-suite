var C = class {
  async *m() {
    return 42;
  }
  get #m() {
    return 'test262';
  }
  method() {
    return this.#m;
  }
};
var c = new C();
c.m().next().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);