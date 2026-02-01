var iterCount = 0;
async function fn() {
  for await (let [{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }] of [[]]) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);