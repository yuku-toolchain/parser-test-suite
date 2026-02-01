const iter = (function* () {
  yield;
  yield;
})();
async function fn() {
  for await (var [...x] of [iter]) {
    return;
  }
}
fn().then(() => {}).then($DONE, $DONE);