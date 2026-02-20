var C = class {
  get #m() {
    return 'test262';
  }
  B = class {
    method(o) {
      return o.#m;
    }
  };
};
let c = new C();
let innerB = new c.B();