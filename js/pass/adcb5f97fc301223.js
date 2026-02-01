var C = class {
  static #field = (a, b) => undefined;
  static field = function () {};
  static accessPrivateField() {
    return this.#field;
  }
};