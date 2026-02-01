var C = class {
  #f() {
    return 42;
  }
  static g() {
    return this.#f();
  }
};