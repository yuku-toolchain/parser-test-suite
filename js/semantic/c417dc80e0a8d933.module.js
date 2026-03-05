let eval, arguments;
let iterCount = 0;
async function fn() {
  for await ({eval = 3, arguments = 4} of [{}]) {
    iterCount += 1;
  }
}
let promise = fn();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);