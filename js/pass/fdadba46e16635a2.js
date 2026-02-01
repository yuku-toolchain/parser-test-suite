var calls = 0;
var reason = {};
var obj = {
  get [Symbol.iterator]() {
    throw reason;
  },
  get [Symbol.asyncIterator]() {
    calls += 1;
    return null;
  }
};
var callCount = 0;
var C = class {
  static async *#gen() {
    callCount += 1;
    yield* obj;
  }
  static get gen() {
    return this.#gen;
  }
};
var iter = C.gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);