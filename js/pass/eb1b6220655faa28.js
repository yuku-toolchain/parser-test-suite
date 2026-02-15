var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    return {
      next: null
    };
  }
};
var callCount = 0;
var gen = async function* () {
  callCount += 1;
  yield* obj;
};
var iter = gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);