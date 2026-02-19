var callCount = 0;
class C {
  async *#method({x: y}) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method({
  x: 23
}).next().then(() => {}).then($DONE, $DONE);