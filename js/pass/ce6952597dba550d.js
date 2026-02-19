var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    return {
      next() {
        return {
          then: undefined,
          value: 42,
          done: false
        };
      }
    };
  }
};
var callCount = 0;
async function* gen() {
  callCount += 1;
  yield* obj;
}
var iter = gen();
iter.next().then(({value, done}) => {}).then($DONE, $DONE);