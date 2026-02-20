var C = class {
  foo = "foobar";
  m() {
    return 42;
  }
  m2() {
    return 39;
  }
  bar = "barbaz";
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