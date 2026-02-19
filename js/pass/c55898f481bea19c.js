class C {
  static #field = () => 'Test262';
  static field = function () {
    return 42;
  };
  static accessPrivateField() {
    return this.#field;
  }
}