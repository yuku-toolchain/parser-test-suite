var C = class {
  *#method() {}
  getPrivateMethod() {
    return this.#method;
  }
};
let c = new C();