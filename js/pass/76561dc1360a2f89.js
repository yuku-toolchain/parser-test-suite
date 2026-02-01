class C {
  constructor() {
    this.f();
  }
}
class D extends C {
  f() {
    this.#m();
  }
  #m() {
    return 42;
  }
}