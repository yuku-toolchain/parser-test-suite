var values = [2, 1, 3];
var callCount = 0;
var C = class {
  static *#method([[...x] = values] = []) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method().next();