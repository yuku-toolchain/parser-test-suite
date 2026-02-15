class C {
  static async m() {
    return 42;
  }
  #m() {
    return 'test262';
  }
  method() {
    return this.#m();
  }
}
var c = new C();
C.m().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);