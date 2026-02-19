var g = async function* () {};
var it = g();
it.return('sent-value').then(function (ret) {
  it.next().then(function (ret) {}).then($DONE, $DONE);
}).catch($DONE);