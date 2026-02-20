class C {
  static async m() {
    return 42;
  }
  static *#$(value) {
    yield* value;
  }
  static *#_(value) {
    yield* value;
  }
  static *#o(value) {
    yield* value;
  }
  static *#℘(value) {
    yield* value;
  }
  static *#ZW_‌_NJ(value) {
    yield* value;
  }
  static *#ZW_‍_J(value) {
    yield* value;
  }
  static get $() {
    return this.#$;
  }
  static get _() {
    return this.#_;
  }
  static get o() {
    return this.#o;
  }
  static get ℘() {
    return this.#℘;
  }
  static get ZW_‌_NJ() {
    return this.#ZW_‌_NJ;
  }
  static get ZW_‍_J() {
    return this.#ZW_‍_J;
  }
}
var c = new C();
C.m().then(function (v) {
  function assertions() {}
  return Promise.resolve(assertions());
}).then($DONE, $DONE);