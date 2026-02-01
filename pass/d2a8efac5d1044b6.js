var callCount = 0;
class C {
  static *#method({arrow = () => {}} = {}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method().next();