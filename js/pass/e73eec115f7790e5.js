class C {
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
    set #m(v) {
      this._v = v;
    }
  };
}
let c = new C();
let innerB = new c.B();
innerB.method(innerB, 'test262');
c.method('outer class');