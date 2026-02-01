var iterCount = 0;
var asyncIter = (async function* () {
  yield* [[3, 4, 5]];
})();
async function* fn() {
  for await (let [...[x, y, z]] of asyncIter) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);