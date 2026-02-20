class C {
  static #method(a, b, c) {}
  static getPrivateMethod() {
    return this.#method;
  }
}