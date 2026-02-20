var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    return {
      next: Symbol('oi')
    };
  }
};
var callCount = 0;
var C = class {
  async *gen() {
    callCount += 1;
    yield* obj;
  }
};
var gen = C.prototype.gen;
var iter = gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);