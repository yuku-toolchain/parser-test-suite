var C = class {
  static #x;
  static #y;
  foo = "foobar";
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