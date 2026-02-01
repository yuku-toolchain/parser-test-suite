var C = class {
  static async m() {
    return 42;
  }
  static #$;
  static #_;
  static #o;
  static #℘;
  static #ZW_‌_NJ;
  static #ZW_‍_J;
  static $(value) {
    this.#$ = value;
    return this.#$;
  }
  static _(value) {
    this.#_ = value;
    return this.#_;
  }
  static o(value) {
    this.#o = value;
    return this.#o;
  }
  static ℘(value) {
    this.#℘ = value;
    return this.#℘;
  }
  static ZW_‌_NJ(value) {
    this.#ZW_‌_NJ = value;
    return this.#ZW_‌_NJ;
  }
  static ZW_‍_J(value) {
    this.#ZW_‍_J = value;
    return this.#ZW_‍_J;
  }
};
var c = new C();
C.m().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);