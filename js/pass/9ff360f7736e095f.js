var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    return {
      next() {
        return {
          then: '',
          value: 42,
          done: false
        };
      }
    };
  }
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
iter.next().then(({value, done}) => {}).then($DONE, $DONE);