var values = [1, 2, 3, 4, 5];
var callCount = 0;
var C = class {
  *#method([...x] = values) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next();