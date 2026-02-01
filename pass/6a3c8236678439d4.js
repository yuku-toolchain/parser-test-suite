var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]: ''
};
var callCount = 0;
var gen = ({
  async *method() {
    callCount += 1;
    yield* obj;
  }
}).method;
var iter = gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);