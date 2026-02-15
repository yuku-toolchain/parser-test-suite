var callCount = 0;
class C {
  static async *#method([_, x] = []) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method().next().then(() => {}).then($DONE, $DONE);