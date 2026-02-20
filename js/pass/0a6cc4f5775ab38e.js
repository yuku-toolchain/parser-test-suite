class C {
  foo = "foobar";
  m() {
    return 42;
  }
  static #xVal;
  static #yVal;
  m2() {
    return 39;
  }
  bar = "barbaz";
  static #x(value) {
    this.#xVal = value;
    return this.#xVal;
  }
  static #y(value) {
    this.#yVal = value;
    return this.#yVal;
  }
  static x() {
    return this.#x(42);
  }
  static y() {
    return this.#y(43);
  }
}
var c = new C();