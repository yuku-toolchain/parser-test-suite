class C {
  static *m() {
    return 42;
  }
  #m = 'test262';
  method() {
    return this.#m;
  }
}
var c = new C();