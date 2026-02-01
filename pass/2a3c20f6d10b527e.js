class C {
  static set #f(v) {
    this._v = v;
  }
  static access() {
    this.#f = 'Test262';
  }
}
C.access();