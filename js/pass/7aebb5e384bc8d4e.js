var callCount = 0;
var C = class {
  #method({x: [y]}) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method({
  x: [45]
});