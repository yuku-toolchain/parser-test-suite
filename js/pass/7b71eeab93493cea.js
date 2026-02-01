var iterCount = 0;
async function fn() {
  for await (let {a, b, ...rest} of [{
    x: 1,
    y: 2,
    a: 5,
    b: 3
  }]) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);