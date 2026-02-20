var C = class {
  static #m() {
    return 'outer class';
  }
  static methodAccess() {
    return this.#m();
  }
  static B = class {
    #m() {
      return 'inner class';
    }
    static access(o) {
      return o.#m();
    }
  };
};
let b = new C.B();