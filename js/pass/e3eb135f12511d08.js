var C = class {
  #m() {
    return 'test262';
  }
  *m() {
    return 42;
  }
  method() {
    return this.#m();
  }
};
var c = new C();