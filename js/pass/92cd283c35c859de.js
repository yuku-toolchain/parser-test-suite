var thrownError = new Error("Catch me.");
var obj = {
  [Symbol.iterator]() {
    return {
      next() {
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
asyncg().next().then(function (result) {}, function (err) {}).then($DONE, $DONE);