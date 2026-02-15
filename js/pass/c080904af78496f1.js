class C {
  static #f() {
    return 42;
  }
  static g() {
    const arrowFunction = () => {
      return this.#f();
    };
    return arrowFunction();
  }
}