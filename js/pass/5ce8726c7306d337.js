var iterCount = 0;
var asyncIter = (async function* () {
  yield* [{
    w: {
      x: undefined,
      z: 7
    }
  }];
})();
async function* fn() {
  for await (let {w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }} of asyncIter) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);