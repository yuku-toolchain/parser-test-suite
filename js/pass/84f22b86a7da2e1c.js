var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]: Symbol.asyncIterator
};
var callCount = 0;
var C = class {
  static async *gen() {
    callCount += 1;
    yield* obj;
  }
};
var gen = C.gen;
var iter = gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);