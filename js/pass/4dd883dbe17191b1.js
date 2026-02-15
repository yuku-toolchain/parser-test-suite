class C {
  static #m = 44;
  static getWithEval() {
    return eval("this.#m");
  }
}
class D {
  static #m = 44;
}