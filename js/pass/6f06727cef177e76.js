var error = new Error('boop');
var g = async function* () {
  yield 1;
};
var it = g();
it.next().then(function (ret) {
  it.throw(error).then($DONE, function (err) {
    it.next().then(function (ret) {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);