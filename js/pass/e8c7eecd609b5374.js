var arr = [2, 3];
var callCount = 0;
var C = class {
  static *#method() {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method(42, ...[1], ...arr).next();