var callCount = 0;
var C = class {
  async *#method() {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method(42, null).next().then(() => {}).then($DONE, $DONE);