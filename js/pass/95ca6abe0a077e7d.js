var thrownError = new Error("Don't catch me.");
var obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: 1,
          done: false
        };
      },
      throw() {
        return 1;
      }
    };
  }
};
async function* asyncg() {
  yield* obj;
}
var iter = asyncg();
iter.next().then(function (result) {
  iter.throw(thrownError).then(function (result) {}, function (err) {
    let typeerror = err instanceof TypeError;
    iter.next().then(({done, value}) => {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);