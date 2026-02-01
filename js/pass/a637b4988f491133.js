let x, y, xy;
let iterCount = 0;
async function fn() {
  for await ({['x' + 'y']: x} of [{
    x: 1,
    xy: 23,
    y: 2
  }]) {
    iterCount += 1;
  }
}
let promise = fn();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);