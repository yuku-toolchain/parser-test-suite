var iterCount = 0;
async function* fn() {
  for await (const [cover = function () {}, xCover = (0, function () {})] of [[]]) {
    iterCount += 1;
  }
}
fn().next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);