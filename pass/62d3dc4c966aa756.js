var callCount = 0;
var C = class {
  static #method({x}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method({
  x: 23
});