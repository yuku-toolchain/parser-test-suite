class C {
  set #m(v) {
    this._v = v;
  }
  method() {
    let arrowFunction = () => {
      this.#m = 'Test262';
    };
    arrowFunction();
  }
}
let c = new C();
c.method();
let o = {};