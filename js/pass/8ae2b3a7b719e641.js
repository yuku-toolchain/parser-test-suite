var C = class {
  static #f() {
    return 42;
  }
  g() {
    return this.#f();
  }
};