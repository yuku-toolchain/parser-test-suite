var g = async function* () {};
var iter = g();
iter.next().then(function (result) {
  iter.return(42).then(function (result) {}).then($DONE, $DONE);
}).catch($DONE);