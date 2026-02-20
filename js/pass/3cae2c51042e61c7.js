class C {
  set #m(_) {}
  access() {
    this.#m = 'Test262';
  }
}
let c = new C();