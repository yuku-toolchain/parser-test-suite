var callCount = 0;
class C {
  static #method([{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method([]);