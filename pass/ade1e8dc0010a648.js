var callCount = 0;
var C = class {
  static async *#method([...[x, y, z]]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method([3, 4, 5]).next().then(() => {}).then($DONE, $DONE);