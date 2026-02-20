class C {
  static set #f(v) {
    this._v = v;
  }
  static access() {
    const self = this;
    function innerFunction() {
      self.#f = 'Test262';
    }
    innerFunction();
  }
}
C.access();