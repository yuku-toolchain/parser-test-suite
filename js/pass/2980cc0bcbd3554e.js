var callCount = 0;
class C {
  async *#method([x]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method([]).next().then(() => {}).then($DONE, $DONE);