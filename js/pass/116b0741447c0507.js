var C = class {
  static m() {
    return 42;
  }
  get #m() {
    return 'test262';
  }
  method() {
    return this.#m;
  }
};
var c = new C();