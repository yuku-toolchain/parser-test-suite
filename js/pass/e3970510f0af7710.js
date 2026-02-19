var C = class {
  foo = "foobar";
  m() {
    return 42;
  }
  get #m() {
    return 'test262';
  }
  m2() {
    return 39;
  }
  bar = "barbaz";
  method() {
    return this.#m;
  }
};
var c = new C();