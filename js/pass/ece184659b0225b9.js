var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
class C {
  async *#method([w = counter(), x = counter(), y = counter(), z = counter()] = [null, 0, false, '']) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);