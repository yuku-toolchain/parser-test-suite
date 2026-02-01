var C = class {
  static async *m() {
    return 42;
  }
  #$;
  #_;
  #o;
  #℘;
  #ZW_‌_NJ;
  #ZW_‍_J;
  $(value) {
    this.#$ = value;
    return this.#$;
  }
  _(value) {
    this.#_ = value;
    return this.#_;
  }
  o(value) {
    this.#o = value;
    return this.#o;
  }
  ℘(value) {
    this.#℘ = value;
    return this.#℘;
  }
  ZW_‌_NJ(value) {
    this.#ZW_‌_NJ = value;
    return this.#ZW_‌_NJ;
  }
  ZW_‍_J(value) {
    this.#ZW_‍_J = value;
    return this.#ZW_‍_J;
  }
};
var c = new C();
C.m().next().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);