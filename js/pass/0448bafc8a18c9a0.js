var C = class {
  static #method(a, b, c) {}
  static getPrivateMethod() {
    return this.#method;
  }
};