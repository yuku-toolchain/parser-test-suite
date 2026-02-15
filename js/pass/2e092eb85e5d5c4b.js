class C {
  *m() {
    return 42;
  }
  #m() {
    return 'test262';
  }
  method() {
    return this.#m();
  }
}
var c = new C();