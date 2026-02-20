class C {
  static #m = 'outer class';
  static B = class {
    static fieldAccess(o) {
      return o.#m;
    }
  };
}