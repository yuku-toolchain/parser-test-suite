var obj = {
  [Symbol.iterator]() {
    return '';
  }
};
var callCount = 0;
var gen = async function* g() {
  callCount += 1;
  yield* obj;
};
var iter = gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);