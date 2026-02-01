var iterCount = 0;
async function fn() {
  for await (var {w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }} of [{
    w: {
      x: undefined,
      z: 7
    }
  }]) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);