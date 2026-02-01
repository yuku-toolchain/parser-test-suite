let xCover, cover;
let iterCount = 0;
async function* fn() {
  for await ([xCover = (0, function () {}), cover = function () {}] of [[]]) {
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);