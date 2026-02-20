var initCount = 0;
var callCount = 0;
var C = class {
  #method([[] = (function () {
    initCount += 1;
  })()]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method([[23]]);