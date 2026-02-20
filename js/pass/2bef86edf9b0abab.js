var callCount = 0;
class C {
  static async *#method({w: [x, y, z] = [4, 5, 6]}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method({
  w: [7, undefined]
}).next().then(() => {}).then($DONE, $DONE);