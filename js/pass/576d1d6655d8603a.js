class C {
  static set #m(v) {
    this._v = v;
  }
  static setWithEval() {
    eval('this.#m = "Test262"');
  }
}
class D {
  static set #m(v) {}
}
C.setWithEval();