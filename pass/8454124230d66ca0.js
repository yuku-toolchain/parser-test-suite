var C = class {
  #m() {
    return 'outer class';
  }
  method() {
    return this.#m();
  }
  B = class {
    method(o) {
      return o.#m;
    }
    set #m(v) {
      this._v = v;
    }
  };
};
let c = new C();
let innerB = new c.B();