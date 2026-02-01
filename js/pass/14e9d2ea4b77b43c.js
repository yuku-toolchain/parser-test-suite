var callCount = 0;
var C = class {
  async *#method() {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method(42, undefined).next().then(() => {}).then($DONE, $DONE);