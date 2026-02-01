var initCount = 0;
var iterCount = 0;
var iter = (function* () {
  iterCount += 1;
})();
var callCount = 0;
var C = class {
  static *#method([[] = (function () {
    initCount += 1;
    return iter;
  })()]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method([]).next();