var count = 0;
var callCount = 0;
var C = class {
  async *#method({...x} = {
    get v() {
      count++;
      return 2;
    }
  }) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);