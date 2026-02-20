var C = class {
  #m = 'test262';
  foo = "foobar";
  bar = "barbaz";
  method() {
    return this.#m;
  }
};
var c = new C();