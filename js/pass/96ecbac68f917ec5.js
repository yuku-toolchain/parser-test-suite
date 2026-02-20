function* g() {
  yield 42;
  yield 43;
}
async function* asyncg() {
  yield* g();
}
var iter = asyncg();
var val = 'some specific return value';
iter.next().then(function (result) {
  iter.return(val).then(function (result) {
    iter.next().then(({done, value}) => {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);