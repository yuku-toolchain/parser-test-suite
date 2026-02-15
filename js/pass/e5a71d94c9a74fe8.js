var callCount = 0;
function* g() {
  callCount += 1;
}
var callCount = 0;
var C = class {
  static async *#method([[] = g()] = [[]]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);