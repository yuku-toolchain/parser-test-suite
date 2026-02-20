var callCount = 0;
var C = class {
  async *#method([x, y, z] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);