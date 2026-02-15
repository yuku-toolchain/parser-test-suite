var C = class {
  static #m() {
    return 'outer class';
  }
  static methodAccess() {
    return this.#m();
  }
  static B = class {
    set #m(v) {
      this._v = v;
    }
    static access(o) {
      o.#m = 'inner class';
    }
  };
};
let b = new C.B();
C.B.access(b);