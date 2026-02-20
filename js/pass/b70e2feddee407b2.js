var thenable = {
  then: function (resolve, reject) {
    resolve("a");
  }
};
var iter = (async function* () {
  yield await thenable;
})();
iter.next().then(function (result) {}).then(undefined, $DONE);
iter.next().then(function (result) {}).then($DONE, $DONE);