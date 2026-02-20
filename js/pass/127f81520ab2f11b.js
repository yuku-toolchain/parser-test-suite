var callCount = 0;
var C = class {
  static *#method({cover = function () {}, xCover = (0, function () {})}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method({}).next();