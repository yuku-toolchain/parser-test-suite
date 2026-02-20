var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    return {
      next() {
        return {
          then: 39,
          value: 42,
          done: false
        };
      }
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
iter.next().then(({value, done}) => {}).then($DONE, $DONE);