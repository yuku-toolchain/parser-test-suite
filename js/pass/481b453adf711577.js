var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
var C = class {
  async *#method({w = counter(), x = counter(), y = counter(), z = counter()} = {
    w: null,
    x: 0,
    y: false,
    z: ''
  }) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);