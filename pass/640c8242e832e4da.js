let argument, eval;
let iterCount = 0;
async function* fn() {
  for await ([arguments = 4, eval = 5] of [[]]) {
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);