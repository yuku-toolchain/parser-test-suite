var reason = {};
var obj = {
  get [Symbol.iterator]() {
    throw reason;
  }
};
var callCount = 0;
async function* gen() {
  callCount += 1;
  yield* obj;
}
var iter = gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);