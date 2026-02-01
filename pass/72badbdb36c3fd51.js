var values = [2, 1, 3];
var iterCount = 0;
var asyncIter = (async function* () {
  yield* [[]];
})();
async function fn() {
  for await (var [[...x] = values] of asyncIter) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);