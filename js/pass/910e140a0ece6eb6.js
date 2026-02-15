var C = class {
  constructor() {
    this.f();
  }
};
class D extends C {
  f() {
    this.#m = 42;
  }
  set #m(val) {}
}