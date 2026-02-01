class C {
  static #m = () => 'outer class';
  static fieldAccess() {
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
}
let b = new C.B();