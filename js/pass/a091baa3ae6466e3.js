var C = class {
  static #method() {
    return 'Test262';
  }
  static getPrivateMethod() {
    return this.#method;
  }
};