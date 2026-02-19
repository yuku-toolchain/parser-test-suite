var obj = {};
var abrupt = function () {
  throw obj;
};
var callCount = 0;
class C {
  async *#gen() {
    callCount += 1;
    yield* abrupt();
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