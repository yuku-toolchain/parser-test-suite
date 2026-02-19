var reason = {};
var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    throw reason;
  }
};
var callCount = 0;
var C = class {
  async *#gen() {
    callCount += 1;
    yield* obj;
  }
  get gen() {
    return this.#gen;
  }
};
const c = new C();
var iter = c.gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);