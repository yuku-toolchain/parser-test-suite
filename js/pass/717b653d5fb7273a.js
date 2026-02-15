class C {
  static #m() {
    return 'outer class';
  }
  static B = class {
    static methodAccess(o) {
      return o.#m();
    }
  };
}