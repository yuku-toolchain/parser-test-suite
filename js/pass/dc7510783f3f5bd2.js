var C = class {
  static *#method() {}
  static getPrivateMethod() {
    return this.#method;
  }
};