var iter, result;
var executionorder = 0;
var valueisset = false;
async function* g() {
  iter.next().then(function (result) {}, function () {}).catch($DONE);
  valueisset = true;
  yield 1;
  yield 2;
}
iter = g();
iter.next().then(function (result) {
  iter.next().then(function (result) {}).then($DONE, $DONE);
}).catch($DONE);