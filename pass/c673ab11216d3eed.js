var iterCount = 0;
var asyncIter = (async function* () {
  yield* [[{
    u: 777,
    w: 888,
    y: 999
  }]];
})();
async function* fn() {
  for await (var [{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }] of asyncIter) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);