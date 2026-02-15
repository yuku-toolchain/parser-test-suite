let rest;
let iterCount = 0;
async function* fn() {
  for await ({...rest} of [51]) {
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);