var innerPromise = Promise.resolve("unwrapped value");
var asyncIter = {
  [Symbol.asyncIterator]() {
    return this;
  },
  next() {
    return {
      done: false,
      value: innerPromise
    };
  },
  get return() {},
  get throw() {}
};
async function* f() {
  yield* asyncIter;
}
f().next().then(v => {}).then($DONE, $DONE);