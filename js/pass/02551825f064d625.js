var callCount = 0;
var C = class {
  #method([...[x, y, z]] = [3, 4, 5]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method();