var callCount = 0;
var C = class {
  #method({gen = function* () {}, xGen = function* x() {}}) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method({});