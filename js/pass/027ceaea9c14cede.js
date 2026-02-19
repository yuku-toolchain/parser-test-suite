var C = class {
  static f() {
    return this.#g();
  }
  static #g() {
    return 42;
  }
};
class D extends C {}