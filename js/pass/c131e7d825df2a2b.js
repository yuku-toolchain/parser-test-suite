class C {
  #method(a) {}
  getPrivateMethod() {
    return this.#method;
  }
}
let c = new C();