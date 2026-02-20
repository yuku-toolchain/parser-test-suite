class C {
  #m() {
    return "Test262";
  }
  getWithEval() {
    return eval("this.#m()");
  }
}
class D {
  #m() {}
}
let c = new C();
let d = new D();