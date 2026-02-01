class C {
  get #m() {}
  access() {
    this.#m;
  }
}
let c = new C();