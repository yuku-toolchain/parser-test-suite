var callCount = 0;
class C {
  static *#method() {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method(42, 'TC39').next();