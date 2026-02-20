class C {
  static get #f() {
    return 'Test262';
  }
  static access() {
    return this.#f;
  }
}