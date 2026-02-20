var iter = (function* () {})();
iter.next();
var callCount = 0;
var C = class {
  *#method([] = iter) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next();