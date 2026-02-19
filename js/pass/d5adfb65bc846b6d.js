var callCount = 0;
class C {
  static #method([x = 23]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method([undefined]);