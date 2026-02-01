var iterCount = 0;
async function fn() {
  for await (const {cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }} of [{}]) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);