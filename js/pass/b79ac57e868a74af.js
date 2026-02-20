var callCount = 0;
var C = class {
  async *#method([_, x] = []) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);