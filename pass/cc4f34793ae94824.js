class C {
  #f() {
    return 42;
  }
  static g() {
    return this.#f();
  }
}