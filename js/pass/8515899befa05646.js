var g = async function* () {
  yield 1;
};
var it = g();
var promise = new Promise(function () {});
it.next().then(function (ret) {
  it.throw(promise).then($DONE, function (err) {
    it.next().then(function (ret) {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);