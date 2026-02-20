var callCount = 0;
var C = class {
  static #method({x: [y]} = {
    x: [45]
  }) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method();