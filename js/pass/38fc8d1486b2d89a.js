let xFnexp, fnexp;
let iterCount = 0;
async function* fn() {
  for await ([xFnexp = function x() {}, fnexp = function () {}] of [[]]) {
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);