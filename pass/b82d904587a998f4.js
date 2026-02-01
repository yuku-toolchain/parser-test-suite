class C {
  static #x;
  static #y;
  *m() {
    return 42;
  }
  static x() {
    this.#x = 42;
    return this.#x;
  }
  static y() {
    this.#y = 43;
    return this.#y;
  }
}
var c = new C();