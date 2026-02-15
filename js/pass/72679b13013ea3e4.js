var iterCount = 0;
var asyncIter = (async function* () {
  yield* [{
    w: {
      x: undefined,
      z: 7
    }
  }];
})();
async function fn() {
  for await (const {w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }} of asyncIter) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);