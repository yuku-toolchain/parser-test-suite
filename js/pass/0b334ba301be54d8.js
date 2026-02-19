var callCount = 0;
var C = class {
  static *#method([[x, y, z] = [4, 5, 6]]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method([]).next();