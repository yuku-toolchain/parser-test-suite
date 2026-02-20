var initCount = 0;
var iterCount = 0;
var iter = (function* () {
  iterCount += 1;
})();
var iterCount = 0;
var asyncIter = (async function* () {
  yield* [[]];
})();
async function* fn() {
  for await (const [[] = (function () {
    initCount += 1;
    return iter;
  })()] of asyncIter) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);