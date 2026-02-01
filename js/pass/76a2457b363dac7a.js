var callCount = 0;
class C {
  static *#method([...{length}] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method().next();