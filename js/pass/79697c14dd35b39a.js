class C {
  *#method() {}
  getPrivateMethod() {
    return this.#method;
  }
}
let c = new C();