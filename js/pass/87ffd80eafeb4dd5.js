var values = [2, 1, 3];
var initCount = 0;
var callCount = 0;
var C = class {
  static *#method([[...x] = (function () {
    initCount += 1;
  })()] = [values]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method().next();