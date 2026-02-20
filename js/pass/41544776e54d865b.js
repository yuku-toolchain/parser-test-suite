var error = new Error("boop");
var g = async function* () {
  try {
    yield 1;
  } finally {
    throw error;
  }
};
var it = g();
it.next().then(function (ret) {
  it.return('sent-value').then($DONE, function (err) {
    it.next().then(function (ret) {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);