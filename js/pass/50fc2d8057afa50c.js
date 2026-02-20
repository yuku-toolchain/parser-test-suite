let xCls, cls, xCls2;
let iterCount = 0;
async function fn() {
  for await ({x: xCls = class x {}, x: cls = class {}, x: xCls2 = class {
    static name() {}
  }} of [{}]) {
    iterCount += 1;
  }
}
let promise = fn();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);