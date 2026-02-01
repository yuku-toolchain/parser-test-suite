class C {
  foo = "foobar";
  m() {
    return 42;
  }
  #x;
  #y;
  m2() {
    return 39;
  }
  bar = "barbaz";
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