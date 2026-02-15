var obj = {};
var abrupt = function () {
  throw obj;
};
var callCount = 0;
async function* gen() {
  callCount += 1;
  yield* abrupt();
}
var iter = gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);