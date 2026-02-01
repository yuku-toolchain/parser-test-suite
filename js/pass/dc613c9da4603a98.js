var C = class {
  f = this.g();
};
class D extends C {
  g() {
    this.#m;
  }
  get #m() {
    return 42;
  }
}