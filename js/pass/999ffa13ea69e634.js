var values = [1, 2, 3];
var iterCount = 0;
async function* fn() {
  for await (let [...[...x]] of [values]) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);