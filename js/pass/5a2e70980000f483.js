var C = class {
  f = this.g();
};
class D extends C {
  g() {
    this.#m = 42;
  }
  set #m(val) {}
}