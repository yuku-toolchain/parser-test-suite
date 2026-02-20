class C {
  static async #method() {}
  static getPrivateMethod() {
    return this.#method;
  }
}