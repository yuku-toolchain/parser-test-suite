var C = class {
  set #m(v) {
    this._v = v;
  }
  method() {
    let self = this;
    function innerFunction() {
      self.#m = 'Test262';
    }
    innerFunction();
  }
};
let c = new C();
c.method();
let o = {};