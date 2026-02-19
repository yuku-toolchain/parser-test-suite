var callCount = 0;
var C = class {
  static async *#method() {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method(42).next().then(() => {}).then($DONE, $DONE);