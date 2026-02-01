class C {
  static #m() {
    return 'outer class';
  }
  static methodAccess() {
    return this.#m();
  }
  static B = class {
    get #m() {
      return 'inner class';
    }
    static access(o) {
      return o.#m;
    }
  };
}
let b = new C.B();