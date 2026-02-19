var callCount = 0;
class C {
  static #method({w: [x, y, z] = [4, 5, 6]} = {
    w: [7, undefined]
  }) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method();