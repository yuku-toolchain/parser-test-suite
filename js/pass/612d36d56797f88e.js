var iterCount = 0;
var asyncIter = (async function* () {
  yield* [{}];
})();
async function fn() {
  for await (let {fn = function () {}, xFn = function x() {}} of asyncIter) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);