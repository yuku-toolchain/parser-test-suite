var C = class {
  set #m(v) {
    this._v = v;
  }
  method(v) {
    this.#m = v;
  }
  B = class {
    method(o, v) {
      o.#m = v;
    }
    get #m() {
      return 'test262';
    }
  };
};
let c = new C();
let innerB = new c.B();
c.method('outer class');