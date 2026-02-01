var callCount = 0;
class C {
  static #method([...[x, y, z]]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method([3, 4, 5]);