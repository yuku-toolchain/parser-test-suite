class C {
  set #f(v) {}
  getAccess() {
    return this.#f;
  }
}
let c = new C();