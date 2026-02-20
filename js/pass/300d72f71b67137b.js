var initCount = 0;
var iterCount = 0;
var iter = (function* () {
  iterCount += 1;
})();
var iterCount = 0;
async function fn() {
  for await (const [[] = (function () {
    initCount += 1;
    return iter;
  })()] of [[]]) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);