var C = class {
  static #m = 'outer class';
  static fieldAccess() {
    return this.#m;
  }
  static B = class {
    get #m() {
      return 'inner class';
    }
    static access(o) {
      return o.#m;
    }
  };
};
let b = new C.B();