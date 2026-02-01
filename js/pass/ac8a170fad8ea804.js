var C = class {
  #m() {
    return 'test262';
  }
  method() {
    return this.#m();
  }
};
var c = new C();