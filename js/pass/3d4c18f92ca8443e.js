var iter;
var executionorder = 0;
var valueisset = false;
async function* g() {
  iter.return(42).then(function (result) {}).catch($DONE);
  valueisset = true;
  yield 1;
}
iter = g();
iter.next().then(function (result) {
  iter.next().then(function (result) {}).then($DONE, $DONE);
}).catch($DONE);