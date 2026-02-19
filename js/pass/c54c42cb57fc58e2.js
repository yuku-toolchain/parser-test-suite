class C {
  static *#method() {}
  static getPrivateMethod() {
    return this.#method;
  }
}