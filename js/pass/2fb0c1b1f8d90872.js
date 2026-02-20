var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
class C {
  static async *#method([w = counter(), x = counter(), y = counter(), z = counter()]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method([null, 0, false, '']).next().then(() => {}).then($DONE, $DONE);