var iterCount = 0;
async function* fn() {
  for await (var [{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }] of [[]]) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);