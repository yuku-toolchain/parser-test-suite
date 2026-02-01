class C {
  f = this.g();
}
class D extends C {
  g() {
    this.#m();
  }
  #m() {
    return 42;
  }
}