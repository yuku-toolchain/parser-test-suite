var values = [1, 2, 3];
var callCount = 0;
class C {
  async *#method([...x] = values) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);