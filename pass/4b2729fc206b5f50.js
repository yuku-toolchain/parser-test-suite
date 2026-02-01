class C {
  static get #f() {
    return 'Test262';
  }
  static Inner = class {
    static access(o) {
      return o.#f;
    }
  };
}