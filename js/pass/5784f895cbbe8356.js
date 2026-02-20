var iterCount = 0;
var asyncIter = (async function* () {
  yield* [{}];
})();
async function* fn() {
  for await (let {cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }} of asyncIter) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);