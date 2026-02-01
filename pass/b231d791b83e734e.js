var C = class {
  static #m = 'outer class';
  static fieldAccess() {
    return this.#m;
  }
  static B = class {
    #m = 'inner class';
    static fieldAccess(o) {
      return o.#m;
    }
  };
};
let b = new C.B();