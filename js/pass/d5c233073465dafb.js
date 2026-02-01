var C = class {
  get #m() {
    return 'outer class';
  }
  method() {
    return this.#m;
  }
  B = class {
    method(o) {
      return o.#m;
    }
    #m = 'test262';
  };
};
let c = new C();
let innerB = new c.B();