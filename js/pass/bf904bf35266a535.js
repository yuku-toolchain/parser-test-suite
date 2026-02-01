class C {
  static #m() {
    return "Test262";
  }
  static accessWithEval() {
    return eval("this.#m()");
  }
}
class D {
  static #m() {}
}