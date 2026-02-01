var callCount = 0;
var C = class {
  async *#method([{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method([{
  u: 777,
  w: 888,
  y: 999
}]).next().then(() => {}).then($DONE, $DONE);