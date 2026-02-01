var C = class {
  static #x = 1;
  static x() {
    return this.#x;
  }
};
var P = new Proxy(C, {});