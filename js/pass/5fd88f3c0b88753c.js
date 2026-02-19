class C {
  get #m() {}
  B = class {
    method(o) {
      return o.#m();
    }
    #m() {
      return 'test262';
    }
  };
}
let c = new C();
let innerB = new c.B();