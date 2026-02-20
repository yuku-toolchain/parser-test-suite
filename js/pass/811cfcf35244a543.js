class C {
  #m() {}
  B = class {
    method() {
      return this.#m();
    }
    #m() {
      return 'test262';
    }
  };
}
let c = new C();
let innerB = new c.B();