var callCount = 0;
var C = class {
  *#method([arrow = () => {}]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method([]).next();