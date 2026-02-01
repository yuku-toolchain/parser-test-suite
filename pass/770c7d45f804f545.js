var callCount = 0;
class C {
  static #method([{x, y, z} = {
    x: 44,
    y: 55,
    z: 66
  }]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method([]);