class C {
  get #m() {
    return "Test262";
  }
  getWithEval() {
    return eval("this.#m");
  }
}
class D {
  get #m() {}
}
let c = new C();
let d = new D();