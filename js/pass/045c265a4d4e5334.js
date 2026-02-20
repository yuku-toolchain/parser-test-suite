var callCount = 0;
var C = class {
  #method([cover = function () {}, xCover = (0, function () {})] = []) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method();