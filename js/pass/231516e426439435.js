var values = [2, 1, 3];
var initCount = 0;
var iterCount = 0;
var asyncIter = (async function* () {
  yield* [[values]];
})();
async function fn() {
  for await (const [[...x] = (function () {
    initCount += 1;
  })()] of asyncIter) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);