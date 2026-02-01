var iterCount = 0;
async function fn() {
  for await (let {cover = function () {}, xCover = (0, function () {})} of [{}]) {
    iterCount += 1;
  }
}
fn().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);