var o = {
  a: 3,
  b: 4
};
Object.defineProperty(o, "x", {
  value: 4,
  enumerable: false
});
var iterCount = 0;
var asyncIter = (async function* () {
  yield* [o];
})();
async function fn() {
  for await (var {...rest} of asyncIter) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);