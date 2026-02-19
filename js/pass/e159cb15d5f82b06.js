class C {
  static #m() {
    return 'outer class';
  }
  static methodAccess() {
    return this.#m();
  }
  static B = class {
    #m = 'inner class';
    static fieldAccess(o) {
      return o.#m;
    }
  };
}
let b = new C.B();