var g = async function* () {
  yield 1;
};
var it = g();
it.next().then(function (ret) {
  it.return('sent-value').then(function (ret) {
    it.next().then(function (ret) {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);