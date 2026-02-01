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
  get return() {
    returnGets += 1;
    return null;
  }
};
async function* asyncGenerator() {
  yield* asyncIterable;
}
var asyncIterator = asyncGenerator();
asyncIterator.next().then(function () {
  return asyncIterator.return(2).then(function (result) {});
}).then($DONE, $DONE);