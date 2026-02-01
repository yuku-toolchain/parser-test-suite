class C {
  static get #m() {
    return 'Test262';
  }
  static getWithEval() {
    return eval('this.#m');
  }
}
class D {
  static get #m() {}
}