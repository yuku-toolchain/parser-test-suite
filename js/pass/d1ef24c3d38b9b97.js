var thenable = {
  then: function (resolve, reject) {
    resolve(reject);
  }
};
var iter = (async function* () {
  yield thenable;
})();
iter.next().then(function (result) {
  var reject = result.value;
}).then($DONE, $DONE);