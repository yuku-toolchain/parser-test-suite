var values = [1, 2, 3];
var callCount = 0;
var C = class {
  static async *#method([...x] = values) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);