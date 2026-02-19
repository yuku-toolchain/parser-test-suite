var iterCount = 0;
async function fn() {
  for await (const [...[x, y, z]] of [[3, 4, 5]]) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);