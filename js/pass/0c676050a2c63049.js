var token = {};
var asyncIter = {
  [Symbol.asyncIterator]() {
    return this;
  },
  next() {
    return {
      done: false,
      value: undefined
    };
  },
  throw() {
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
iter.next().then(() => {
  iter.throw().then(({value}) => {}).then($DONE, $DONE);
}).catch($DONE);