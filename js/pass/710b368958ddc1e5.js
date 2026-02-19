var count = 0;
var callCount = 0;
class C {
  static async *#method({...x}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method({
  get v() {
    count++;
    return 2;
  }
}).next().then(() => {}).then($DONE, $DONE);