var obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: 1,
          done: false
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
  iter.return().then(function (result) {
    iter.next().then(({done, value}) => {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);