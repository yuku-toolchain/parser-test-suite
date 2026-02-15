var callCount = 0;
var C = class {
  #method([x = 23]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method([]);