var callCount = 0;
class C {
  static async *#method([x = 23]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method([undefined]).next().then(() => {}).then($DONE, $DONE);