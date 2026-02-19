var thrownError = new Error("Catch me.");
function* g() {
  yield 42;
  yield 43;
}
async function* asyncg() {
  yield* g();
}
var iter = asyncg();
iter.next().then(function (result) {
  iter.throw(thrownError).then(function (result) {}, function (err) {
    iter.next().then(({done, value}) => {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);