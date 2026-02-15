var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var callCount = 0;
class C {
  static async *#method([]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method(iter).next().then(() => {}).then($DONE, $DONE);