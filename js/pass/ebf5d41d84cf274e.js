var obj = {};
var abrupt = function () {
  throw obj;
};
var callCount = 0;
var gen = async function* () {
  callCount += 1;
  yield* abrupt();
};
var iter = gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);