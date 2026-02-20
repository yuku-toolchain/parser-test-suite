var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    return {
      next() {
        return {
          then: null,
          value: 42,
          done: false
        };
      }
    };
  }
};
var callCount = 0;
var gen = async function* g() {
  callCount += 1;
  yield* obj;
};
var iter = gen();
iter.next().then(({value, done}) => {}).then($DONE, $DONE);