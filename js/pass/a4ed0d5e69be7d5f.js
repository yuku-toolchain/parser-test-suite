var callCount = 0;
class C {
  static *#method([...[x, y, z]] = [3, 4, 5]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method().next();