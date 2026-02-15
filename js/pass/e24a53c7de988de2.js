var callCount = 0;
var C = class {
  static *#method([...x] = [1, 2]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method().next();