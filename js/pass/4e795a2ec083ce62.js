var callCount = 0;
var C = class {
  async *#method({x}) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method({
  x: 23
}).next().then(() => {}).then($DONE, $DONE);