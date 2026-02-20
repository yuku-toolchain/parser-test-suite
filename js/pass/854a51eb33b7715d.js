var count = 0;
var callCount = 0;
var C = class {
  static async *#method({...x} = {
    get v() {
      count++;
      return 2;
    }
  }) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);