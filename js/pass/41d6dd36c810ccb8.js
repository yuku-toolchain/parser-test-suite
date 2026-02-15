var callCount = 0;
var C = class {
  async *#method([...{length}]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method([1, 2, 3]).next().then(() => {}).then($DONE, $DONE);