var callCount = 0;
class C {
  static async *#method({x: [y]}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method({
  x: [45]
}).next().then(() => {}).then($DONE, $DONE);