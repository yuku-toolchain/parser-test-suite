let setValue;
let x = {
  get y() {},
  set y(val) {
    setValue = val;
  }
};
let iterCount = 0;
async function* fn() {
  for await ([...x.y] of [[23, 45, 99]]) {
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);