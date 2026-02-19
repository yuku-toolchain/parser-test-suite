var token = {};
var asyncIter = {
  [Symbol.asyncIterator]() {
    return this;
  },
  next() {
    return {
      done: false,
      get value() {
        throw token;
      }
    };
  }
};
async function* f() {
  var thrown;
  try {
    yield* asyncIter;
  } catch (e) {
    thrown = e;
  }
  return thrown;
}
var iter = f();
iter.next().then(({value}) => {}).then($DONE, $DONE);