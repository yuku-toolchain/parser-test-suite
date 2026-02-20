function* g() {
  yield Promise.resolve(1);
}
async function* asyncg() {
  yield* g();
}
asyncg().next().then(function (result) {}).then($DONE, $DONE);