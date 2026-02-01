var callCount = 0;
class C {
  static #method({fn = function () {}, xFn = function x() {}} = {}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method();