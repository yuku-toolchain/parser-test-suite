var callCount = 0;
class C {
  static async *#method({a, b, ...rest}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method({
  x: 1,
  y: 2,
  a: 5,
  b: 3
}).next().then(() => {}).then($DONE, $DONE);