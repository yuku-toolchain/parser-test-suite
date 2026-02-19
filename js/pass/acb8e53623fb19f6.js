var obj = {
  [Symbol.iterator]() {
    return true;
  }
};
var callCount = 0;
class C {
  async *#gen() {
    callCount += 1;
    yield* obj;
  }
  get gen() {
    return this.#gen;
  }
}
const c = new C();
var iter = c.gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);