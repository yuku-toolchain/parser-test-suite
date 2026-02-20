var values = [2, 1, 3];
var iterCount = 0;
async function* fn() {
  for await (var [[...x] = values] of [[]]) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);