var callCount = 0;
class C {
  static *#method([...{length}]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method([1, 2, 3]).next();