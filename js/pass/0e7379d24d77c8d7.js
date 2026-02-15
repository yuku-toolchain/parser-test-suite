var C = class {
  async m() {
    return 42;
  }
  #m = 'test262';
  method() {
    return this.#m;
  }
};
var c = new C();
c.m().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);