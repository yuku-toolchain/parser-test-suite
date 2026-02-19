var iterCount = 0;
var asyncIter = (async function* () {
  yield* [{
    w: [7, undefined]
  }];
})();
async function* fn() {
  for await (const {w: [x, y, z] = [4, 5, 6]} of asyncIter) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);