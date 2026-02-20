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
        return {
          value: Promise.resolve(42),
          done: true
        };
      }
    };
  }
};
async function* asyncg() {
  return yield* obj;
}
let iter = asyncg();
iter.next().then(function (result) {
  iter.throw(thrownError).then(function (result) {
    iter.next().then(({done, value}) => {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);