class C {
  set #m(v) {
    this._v = v;
  }
  setWithEval(v) {
    eval("this.#m = v");
  }
}
class D {
  set #m(v) {}
}
let c = new C();
c.setWithEval("Test262");
let d = new D();