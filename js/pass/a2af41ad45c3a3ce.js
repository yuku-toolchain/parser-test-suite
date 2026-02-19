var callCount = 0;
class C {
  static async *#method({w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method({
  w: undefined
}).next().then(() => {}).then($DONE, $DONE);