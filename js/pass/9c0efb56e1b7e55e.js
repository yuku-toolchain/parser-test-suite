let x, y;
let iterCount = 0;
async function fn() {
  for await ([x, ...y] of [[1, 2, 3, 4, 5, 6]]) {
    iterCount += 1;
  }
}
let promise = fn();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);