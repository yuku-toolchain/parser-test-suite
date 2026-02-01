var callCount = 0;
var C = class {
  async *#method([{x, y, z} = {
    x: 44,
    y: 55,
    z: 66
  }] = [{
    x: 11,
    y: 22,
    z: 33
  }]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);