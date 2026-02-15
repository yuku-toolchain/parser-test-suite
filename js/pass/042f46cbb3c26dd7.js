var callCount = 0;
class C {
  static *#method([...x]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method([1, 2]).next();