var error = new Error('boop');
var g = async function* () {};
var it = g();
it.throw(error).then($DONE, function (err) {
  it.next().then(function (ret) {}).then($DONE, $DONE);
}).catch($DONE);