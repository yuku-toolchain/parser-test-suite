var values = [2, 1, 3];
var initCount = 0;
var callCount = 0;
class C {
  async *#method([[...x] = (function () {
    initCount += 1;
  })()]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method([values]).next().then(() => {}).then($DONE, $DONE);