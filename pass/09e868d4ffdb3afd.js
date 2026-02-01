var g = async function* () {};
(async function* () {
  yield* g();
})().next().then(function (result) {}).then($DONE, $DONE);