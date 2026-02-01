var iterCount = 0;
var asyncIter = (async function* () {
  yield* [{}];
})();
async function fn() {
  for await (const {cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }} of asyncIter) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);