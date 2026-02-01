var iter = (async function* () {
  yield await "a";
})();
iter.next().then(function (result) {}).then(undefined, $DONE);
iter.next().then(function (result) {}).then($DONE, $DONE);