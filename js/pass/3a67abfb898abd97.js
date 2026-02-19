var callCount = 0;
var C = class {
  static async *#method({x: y}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method({
  x: 23
}).next().then(() => {}).then($DONE, $DONE);