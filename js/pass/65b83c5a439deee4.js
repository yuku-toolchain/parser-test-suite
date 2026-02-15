var callCount = 0;
class C {
  static async *#method() {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method(42, null).next().then(() => {}).then($DONE, $DONE);