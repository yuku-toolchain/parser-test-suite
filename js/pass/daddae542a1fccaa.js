var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
}
var iterCount = 0;
var asyncIter = (async function* () {
  yield* [g()];
})();
async function* fn() {
  for await (const [...[]] of asyncIter) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);