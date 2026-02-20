var throwGets = 0;
var returnGets = 0;
var asyncIterable = {
  [Symbol.asyncIterator]: function () {
    return this;
  },
  next: function () {
    return {
      value: 1,
      done: false
    };
  },
  get throw() {
    throwGets += 1;
    return null;
  },
  get return() {
    returnGets += 1;
  }
};
async function* asyncGenerator() {
  yield* asyncIterable;
}
var asyncIterator = asyncGenerator();
asyncIterator.next().then(function () {
  return asyncIterator.throw();
}).then(function (result) {}, function (err) {}).then($DONE, $DONE);