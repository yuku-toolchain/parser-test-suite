var C = class {
  static async #method() {}
  static getPrivateMethod() {
    return this.#method;
  }
};