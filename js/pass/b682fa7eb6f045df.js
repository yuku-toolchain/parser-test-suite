var initCount = 0;
var callCount = 0;
class C {
  static async *#method([[] = (function () {
    initCount += 1;
  })()]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method([[23]]).next().then(() => {}).then($DONE, $DONE);