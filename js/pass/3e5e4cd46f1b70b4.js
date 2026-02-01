var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var callCount = 0;
var C = class {
  static *#method([...[]] = iter) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method().next();