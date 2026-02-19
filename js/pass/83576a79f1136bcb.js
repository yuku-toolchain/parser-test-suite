class C {
  #f() {}
  setAccess() {
    this.#f = 'Test262';
  }
}
let c = new C();