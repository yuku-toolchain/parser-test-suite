var C = class {
  async m() {
    return 42;
  }
  static #x(value) {
    return value / 2;
  }
  static #y(value) {
    return value * 2;
  }
  static x() {
    return this.#x(84);
  }
  static y() {
    return this.#y(43);
  }
};
var c = new C();
c.m().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);