var callCount = 0;
var C = class {
  async *#method([...x] = [1, 2]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);