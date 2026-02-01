var callCount = 0;
var C = class {
  async *#method({x: [y]}) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method({
  x: [45]
}).next().then(() => {}).then($DONE, $DONE);