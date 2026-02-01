let length = "outer";
var iterCount = 0;
async function fn() {
  for await (let [...{0: v, 1: w, 2: x, 3: y, length: z}] of [[7, 8, 9]]) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);