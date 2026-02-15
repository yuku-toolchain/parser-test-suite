class C {
  #m = 44;
  getWithEval() {
    return eval("this.#m");
  }
}
class D {
  #m = 44;
}
let c = new C();
let d = new D();