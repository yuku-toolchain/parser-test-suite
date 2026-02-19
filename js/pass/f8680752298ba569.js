var values = [2, 1, 3];
var initCount = 0;
var iterCount = 0;
async function* fn() {
  for await (var [[...x] = (function () {
    initCount += 1;
  })()] of [[values]]) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);