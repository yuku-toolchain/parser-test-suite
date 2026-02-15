let count = 0;
class C {
  async #method(x) {
    return async () => new.target;
  }
  async method(x) {
    return this.#method(x);
  }
}
let c = new C();
let asyncFn = c.method.bind(c);
asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);