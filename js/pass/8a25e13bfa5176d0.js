class C {
  static #f() {
    return 42;
  }
  static g() {
    const self = this;
    function innerFunction() {
      return self.#f();
    }
    return innerFunction();
  }
}