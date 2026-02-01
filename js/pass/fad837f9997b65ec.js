class C {
  static #$(value) {
    return value;
  }
  static #_(value) {
    return value;
  }
  static #o(value) {
    return value;
  }
  static #℘(value) {
    return value;
  }
  static #ZW_‌_NJ(value) {
    return value;
  }
  static #ZW_‍_J(value) {
    return value;
  }
  m() {
    return 42;
  }
  static $(value) {
    return this.#$(value);
  }
  static _(value) {
    return this.#_(value);
  }
  static o(value) {
    return this.#o(value);
  }
  static ℘(value) {
    return this.#℘(value);
  }
  static ZW_‌_NJ(value) {
    return this.#ZW_‌_NJ(value);
  }
  static ZW_‍_J(value) {
    return this.#ZW_‍_J(value);
  }
}
var c = new C();