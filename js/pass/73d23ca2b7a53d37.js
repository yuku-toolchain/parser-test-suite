class C {
  #m = function () {
    return 'test262';
  };
  method() {
    return this.#m();
  }
}
let c = new C();