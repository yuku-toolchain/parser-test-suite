var iterCount = 0;
var asyncIter = (async function* () {
  yield* [[{
    x: 11,
    y: 22,
    z: 33
  }]];
})();
async function* fn() {
  for await (var [{x, y, z} = {
    x: 44,
    y: 55,
    z: 66
  }] of asyncIter) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);