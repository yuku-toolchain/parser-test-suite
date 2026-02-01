class C {
  #m() {
    return 'test262';
  }
  getPrivateMethod() {
    return this.#m;
  }
}
let c1 = new C();
let c2 = new C();