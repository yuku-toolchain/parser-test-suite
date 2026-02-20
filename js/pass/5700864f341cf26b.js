var values = [1, 2, 3, 4, 5];
var iterCount = 0;
var asyncIter = (async function* () {
  yield* [values];
})();
async function* fn() {
  for await (let [...x] of asyncIter) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);