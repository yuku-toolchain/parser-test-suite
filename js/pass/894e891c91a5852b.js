var throwError = new Error('Catch me');
var g = async function* () {};
var iter = g();
iter.next().then(function (result) {
  iter.throw(throwError).then($DONE, function (err) {}).then($DONE, $DONE);
}).catch($DONE);