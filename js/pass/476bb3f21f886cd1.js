class C {
  static set #f(v) {
    this._v = v;
  }
  static access() {
    const arrowFunction = () => {
      this.#f = 'Test262';
    };
    arrowFunction();
  }
}
C.access();