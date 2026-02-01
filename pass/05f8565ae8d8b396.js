class C {
  async *#method() {}
  getPrivateMethod() {
    return this.#method;
  }
}
let c = new C();