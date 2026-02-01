var callCount = 0;
class C {
  async *#method() {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method(42).next().then(() => {}).then($DONE, $DONE);