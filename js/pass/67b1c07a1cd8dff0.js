let length = "outer";
var iterCount = 0;
var asyncIter = (async function* () {
  yield* [[7, 8, 9]];
})();
async function fn() {
  for await (let [...{0: v, 1: w, 2: x, 3: y, length: z}] of asyncIter) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);