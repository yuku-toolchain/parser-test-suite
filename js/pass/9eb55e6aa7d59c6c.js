var count = 0;
var iterCount = 0;
async function fn() {
  for await (let {...x} of [{
    get v() {
      count++;
      return 2;
    }
  }]) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);