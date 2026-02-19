var iterCount = 0;
async function fn() {
  for await (const {w: [x, y, z] = [4, 5, 6]} of [{}]) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);