var thrownError = new Error("Catch me.");
function* g() {
  throw thrownError;
}
async function* asyncg() {
  yield* g();
}
asyncg().next().then(function (result) {}, function (err) {}).then($DONE, $DONE);