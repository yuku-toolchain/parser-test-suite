var C = class {
  #m = () => 'test262';
  method() {
    return this.#m();
  }
};
let c = new C();