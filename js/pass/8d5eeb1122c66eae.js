var C = class {
  constructor() {
    this.f();
  }
};
class D extends C {
  f() {
    this.#m;
  }
  get #m() {
    return 42;
  }
}