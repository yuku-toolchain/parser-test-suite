var callCount = 0;
class C {
  static async *#method({w: [x, y, z] = [4, 5, 6]} = {}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method().next().then(() => {}).then($DONE, $DONE);