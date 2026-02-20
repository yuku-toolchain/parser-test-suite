var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    return {
      next() {
        return {
          then: true,
          value: 42,
          done: false
        };
      }
    };
  }
};
var callCount = 0;
var gen = ({
  async *method() {
    callCount += 1;
    yield* obj;
  }
}).method;
var iter = gen();
iter.next().then(({value, done}) => {}).then($DONE, $DONE);