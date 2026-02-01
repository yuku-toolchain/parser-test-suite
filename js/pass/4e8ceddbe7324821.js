var iter = (async function* () {
  yield await new Promise(function (resolve) {
    resolve("a");
  });
})();
iter.next().then(function (result) {}).then(undefined, $DONE);
iter.next().then(function (result) {}).then($DONE, $DONE);