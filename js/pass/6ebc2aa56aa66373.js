var iterCount = 0;
async function* fn() {
  for await (var [[x, y, z] = [4, 5, 6]] of [[]]) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);