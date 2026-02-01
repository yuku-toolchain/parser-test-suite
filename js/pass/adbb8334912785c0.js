var thrownError = new Error("Catch me.");
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
        return {
          get done() {
            throw thrownError;
          },
          value: 1
        };
      }
    };
  }
};
async function* asyncg() {
  yield* obj;
}
var iter = asyncg();
iter.next().then(function (result) {
  iter.throw().then(function (result) {}, function (err) {
    iter.next().then(({done, value}) => {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);