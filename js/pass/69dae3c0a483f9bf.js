var C = class {
  #method(a) {}
  getPrivateMethod() {
    return this.#method;
  }
};
let c = new C();