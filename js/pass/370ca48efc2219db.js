var iterCount = 0;
async function* fn() {
  for await (let {cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }} of [{}]) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);