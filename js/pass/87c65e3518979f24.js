class C {
  static m() {
    return 42;
  }
  #x;
  #y;
  x() {
    this.#x = 42;
    return this.#x;
  }
  y() {
    this.#y = 43;
    return this.#y;
  }
}
var c = new C();