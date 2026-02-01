var callCount = 0;
var C = class {
  #method([...[x, y, z]]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method([3, 4, 5]);