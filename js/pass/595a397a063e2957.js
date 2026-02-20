var values = [1, 2, 3, 4, 5];
var callCount = 0;
class C {
  async *#method([...x]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method(values).next().then(() => {}).then($DONE, $DONE);