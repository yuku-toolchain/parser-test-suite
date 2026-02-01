class C {
  #x;
  #y;
  foo = "foobar";
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