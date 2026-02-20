var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
var asyncIter = (async function* () {
  yield* [[null, 0, false, '']];
})();
async function* fn() {
  for await (var [w = counter(), x = counter(), y = counter(), z = counter()] of asyncIter) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);