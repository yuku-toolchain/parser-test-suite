function* g() {}
async function* asyncg() {
  yield* g();
}
asyncg().next().then(function (result) {}).then($DONE, $DONE);