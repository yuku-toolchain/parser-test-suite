var C = class {
  async *m() {
    return 42;
  }
  #$ = 1;
  #_ = 1;
  #o = 1;
  #℘ = 1;
  #ZW_‌_NJ = 1;
  #ZW_‍_J = 1;
  $() {
    return this.#$;
  }
  _() {
    return this.#_;
  }
  o() {
    return this.#o;
  }
  ℘() {
    return this.#℘;
  }
  ZW_‌_NJ() {
    return this.#ZW_‌_NJ;
  }
  ZW_‍_J() {
    return this.#ZW_‍_J;
  }
};
var c = new C();
c.m().next().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);