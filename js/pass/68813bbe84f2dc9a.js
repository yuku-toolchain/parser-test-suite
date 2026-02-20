var callCount = 0;
class C {
  static async *#method([gen = function* () {}, xGen = function* x() {}]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method([]).next().then(() => {}).then($DONE, $DONE);