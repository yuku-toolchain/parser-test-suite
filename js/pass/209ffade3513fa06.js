var g = async function* () {};
var it = g();
var promise = new Promise(function () {});
it.throw(promise).then($DONE, function (err) {
  it.next().then(function (ret) {}).then($DONE, $DONE);
}).catch($DONE);