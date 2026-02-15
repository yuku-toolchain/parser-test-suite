var thenable = {
  then: function (resolve) {
    resolve(resolve);
  }
};
var iter = (async function* () {
  yield thenable;
})();
iter.next().then(function (result) {
  var resolve = result.value;
}).then($DONE, $DONE);