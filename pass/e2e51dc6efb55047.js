var iterCount = 0;
var asyncIter = (async function* () {
  yield* [[[7, 8, 9]]];
})();
async function fn() {
  for await (const [[x, y, z] = [4, 5, 6]] of asyncIter) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);