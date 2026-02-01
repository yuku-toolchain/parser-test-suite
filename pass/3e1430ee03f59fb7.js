var callCount = 0;
var C = class {
  async *#method([[x, y, z] = [4, 5, 6]]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method([]).next().then(() => {}).then($DONE, $DONE);