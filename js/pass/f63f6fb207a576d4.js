var callCount = 0;
var C = class {
  async *#method({w: [x, y, z] = [4, 5, 6]} = {
    w: [7, undefined]
  }) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);