var C = class {
  m() {
    return 42;
  }
  static #x;
  static #y;
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