var C = class {
  static #x(value) {
    return 1;
  }
  static x() {
    return this.#x();
  }
};
var P = new Proxy(C, {});