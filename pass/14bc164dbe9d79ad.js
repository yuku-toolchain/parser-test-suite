var C = class {
  foo = "foobar";
  m() {
    return 42;
  }
  static #x;
  static #y;
  m2() {
    return 39;
  }
  bar = "barbaz";
  static x() {
    this.#x = 42;
    return this.#x;
  }
  static y() {
    this.#y = 43;
    return this.#y;
  }
};
var c = new C();