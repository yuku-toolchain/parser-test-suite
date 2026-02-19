var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
var C = class {
  async *#method([w = counter(), x = counter(), y = counter(), z = counter()]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method([null, 0, false, '']).next().then(() => {}).then($DONE, $DONE);