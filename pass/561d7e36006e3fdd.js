var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
var asyncIter = (async function* () {
  yield* [{
    s: null,
    u: 0,
    w: false,
    y: ''
  }];
})();
async function fn() {
  for await (const {s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter()} of asyncIter) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);