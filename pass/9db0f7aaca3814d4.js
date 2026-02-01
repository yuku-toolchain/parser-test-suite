var thrownError = new Error("Catch me.");
var obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          get value() {
            throw thrownError;
          },
          done: false
        };
      }
    };
  }
};
async function* asyncg() {
  yield* obj;
}
asyncg().next().then(function (result) {}, function (err) {}).then($DONE, $DONE);