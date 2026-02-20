var iterCount = 0;
var asyncIter = (async function* () {
  yield* [[undefined]];
})();
async function fn() {
  for await (var [x = 23] of asyncIter) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);